'use client'
import { AnimatePresence, motion } from 'framer-motion'

import { FC } from 'react'

import { IEmotions } from '@/interfaces/common'
import { IconMoodBlue, IconMoodGreen, IconMoodRed, IconMoodYellow } from '@/shared/icons'

import styles from './emotions-chart.module.scss'

const MOODS = [
  { icon: <IconMoodRed />, color: '#e79999', key: 'angry' },
  { icon: <IconMoodBlue />, color: '#c0ebf1', key: 'sad' },
  { icon: <IconMoodGreen />, color: '#C0D6A6', key: 'normal' },
  { icon: <IconMoodYellow />, color: '#F9E692', key: 'happy' },
]

//interface
interface IEmotionsChart {
  // emotions: { icon: ReactNode; percent: number; color: string }[]
  emotions: IEmotions
}

//component
export const EmotionsChartComponent: FC<Readonly<IEmotionsChart>> = ({ emotions }) => {
  const getHeight = () => {
    const sortedMoods = Object.values(emotions).sort((a: any, b: any) => b - a)
    return sortedMoods[0] * 2 + 80
  }

  const getPercent = (key: string) => {
    switch (key) {
      case 'sad':
        return emotions.sad
      case 'happy':
        return emotions.happy
      case 'normal':
        return emotions.normal
      case 'angry':
        return emotions.angry
      default:
        return 1
    }
  }

  //return
  return (
    <>
      {Object.entries(emotions).length ? (
        <section className={styles.emotions_chart} style={{ height: getHeight() }}>
          {MOODS.map((item) => (
            <div className={styles.emotions_chart__item} key={item.key}>
              {item.icon}

              <AnimatePresence mode={'wait'}>
                <motion.div
                  key={item.key}
                  initial={{ height: 2 }}
                  animate={{ height: getPercent(item.key) * 2 }}
                  exit={{ height: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div
                    className={styles.emotions_chart__column}
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              </AnimatePresence>

              <span className={styles.emotions_chart__percant}>{getPercent(item.key) ?? 0}%</span>
            </div>
          ))}
        </section>
      ) : (
        <div className={styles.emotions_chart__no_data}>
          <p>Здається, ти не відзначав свій настрій протягом цього періоду.</p>
          <span>
            Аби отримати статистику тобі потрібно відзначити свій настрій принаймні раз на день.
          </span>
        </div>
      )}
    </>
  )
}
export default EmotionsChartComponent
