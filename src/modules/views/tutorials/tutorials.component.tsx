'use client'
import PhotoTutorialComponent from './elements/photo-tutorial/photo-tutorial.component'

import { FC, useState } from 'react'

import { VideoTutorialComponent } from '@/modules/views/tutorials/elements'
import { ModalGettingToInstructionsComponent } from '@/shared/components'
import { IconUpArrow } from '@/shared/icons'
import { ImageCapybaraTeacher } from '@/shared/images'

import styles from './tutorials.module.scss'

//interface
interface ITutorials {}

//component
export const TutorialsComponent: FC<Readonly<ITutorials>> = () => {
  const [expandedItem, setExpandedItem] = useState(1)

  //return
  return (
    <section className={`${styles.tutorials} container`}>
      <h1 className={`${styles.tutorials__title} title`}>Інструкції</h1>

      <div className={styles.tutorials__content}>
        {[1, 2].map((item) => (
          <div className={styles.tutorials__box} key={item}>
            <div
              className={`${styles.tutorials__box_title} ${expandedItem === item && styles.expanded}`}
            >
              <p>
                {item % 2 === 1
                  ? 'Як справитися зі страхом самотності?'
                  : 'Що робити коли не можеш позбутися відчуття самотності?'}
              </p>

              <div
                className={`${styles.tutorials__box_wrapper} ${expandedItem === item && styles.expanded}`}
              >
                <div className={styles.tutorials__box_inner}>
                  {item % 2 === 1 ? <PhotoTutorialComponent /> : <VideoTutorialComponent />}
                </div>
              </div>

              <button
                onClick={() => setExpandedItem(expandedItem === item ? -1 : item)}
                className={`${styles.tutorials__box_btn} ${expandedItem === item && styles.expanded}`}
              >
                <IconUpArrow />
              </button>
            </div>
          </div>
        ))}
      </div>
      <ModalGettingToInstructionsComponent
        title='Знання - сила! Вивчаючи інструкції ти зможеш дізнатись багато нового та знайти відповіді на свої запитання'
        image={ImageCapybaraTeacher}
        buttonText='Круто!'
        check='instructions'
      />
    </section>
  )
}
export default TutorialsComponent
