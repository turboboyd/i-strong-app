'use client'

import { useSearchParams } from 'next/navigation'

import 'moment/locale/uk'
import moment from 'moment'

import { FC, useEffect, useState } from 'react'

import { useGetStatistics } from '@/api/mood-tracker'
import { EmotionsChartComponent } from '@/modules/views/statistics/elements'
import {
  BaseModalComponent,
  ModalGettingToInstructionsComponent,
  PageHeaderComponent,
} from '@/shared/components'
import { CalendarModalComponent } from '@/shared/components/templates/calendar-modal'
import { SelectComponent } from '@/shared/components/ui/select'
import { useQuerySearchParams } from '@/shared/hooks/useQuerySearchParams'
import { IconCalendar } from '@/shared/icons'
import { ImageCapybaraBook } from '@/shared/images'
import { useCommonStore, useUserStore } from '@/shared/stores'

import styles from './statistics.module.scss'

//interface
interface IStatistics {}

interface IEmotions {
  sad: number
  happy: number
  normal: number
  angry: number
}

//component
export const StatisticsComponent: FC<Readonly<IStatistics>> = () => {
  const searchParams = useSearchParams()
  const { setQuery } = useQuerySearchParams()

  const handleChangeCommonStore = useCommonStore((state) => state.handleChangeCommonStore)
  const isModalActive = useCommonStore((state) => state.isModalActive)
  const token = useUserStore((state) => state.user?.access_token)

  const [dates, setDates] = useState({ first: '', second: '' })
  const [selectedPeriod, setSelectedPeriod] = useState('day')
  const [customPeriod, setCustomPeriod] = useState<null | number>(null)

  const removeMilliseconds = (timeString: string | null | undefined) => {
    return moment(timeString).format('YYYY-MM-DDTHH:mm:ss') + 'Z'
  }

  const { data: statInfo, refetch: statisticsRefetch } = useGetStatistics(token ?? '', {
    start_date: searchParams.get('start_date')
      ? removeMilliseconds(searchParams.get('start_date')?.toString())
      : removeMilliseconds(moment().startOf('day').toString()),

    end_date: searchParams.get('end_date')
      ? removeMilliseconds(searchParams.get('end_date')?.toString())
      : removeMilliseconds(moment().endOf('day').toString()),
  })

  const getDateRange = () => {
    if (searchParams.get('start_date') && searchParams.get('end_date')) {
      if (
        moment(searchParams.get('start_date')).isSame(moment(searchParams.get('end_date')), 'day')
      ) {
        return `${moment(searchParams.get('start_date')).format('DD.MM.YYYY')}`
      } else
        return `${moment(searchParams.get('start_date')).format('DD.MM.YYYY')} - ${moment(searchParams.get('end_date')).format('DD.MM.YYYY')}`
    } else return moment().format('DD.MM.YYYY')
  }

  const handleSetDates = (value: { first: string; second: string }) => {
    setDates(value)
    const duration = moment.duration(moment(value.second).diff(moment(value.first)))

    if (!value.second) {
      setCustomPeriod(1)
    } else {
      setCustomPeriod(duration.asDays())
    }
  }

  const handleChangeSelectedPeriod = (value: string) => {
    if (value !== 'custom') {
      setQuery({
        // @ts-ignore
        start_date: moment().startOf(value).toISOString(),
        // @ts-ignore
        end_date: moment().endOf(value).toISOString(),
      })

      setCustomPeriod(0)
    }

    setSelectedPeriod(value)
  }

  useEffect(() => {
    if (customPeriod) {
      setSelectedPeriod('custom')
    }
  }, [customPeriod])

  useEffect(() => {
    statisticsRefetch()
  }, [searchParams.get('start_date'), searchParams.get('end_date'), selectedPeriod])

  //return
  return (
    <section className={`${styles.statistics} container`}>
      <PageHeaderComponent title={'Статистика'} />

      <div className={styles.statistics__settings}>
        <div className={styles.statistics__select_wrapper} onClick={() => useGetStatistics}>
          <SelectComponent
            selectedValue={selectedPeriod}
            setSelectedValue={handleChangeSelectedPeriod}
            duration={customPeriod}
          />
        </div>

        <button
          className={styles.statistics__calendar_btn}
          onClick={() =>
            handleChangeCommonStore({
              isModalActive: true,
            })
          }
        >
          <IconCalendar />
        </button>
      </div>

      {Boolean(statInfo) && (
        <div className={styles.statistics__chart}>
          <span>{getDateRange()}</span>

          <EmotionsChartComponent emotions={statInfo as IEmotions} />
        </div>
      )}

      <div className={styles.statistics__advice}>
        <h2 className={styles.statistics__advice_title}>Порада</h2>

        <p>
          Записуй у щоденнику що викликало у тебе ті чи інші почуття, щоб аналізувати причини та
          наслідки і почувати себе краще.
        </p>
      </div>

      {/*<div className={styles.statistics__cards}>*/}
      {/*  <div className={styles.statistics__card}>*/}
      {/*    <p className={styles.statistics__card_title}>Виконано челенджів</p>*/}
      {/*    1/3*/}
      {/*  </div>*/}

      {/*  <div className={`${styles.statistics__card} ${styles.yellow}`}>*/}
      {/*    <p className={styles.statistics__card_title}>Зароблено монеток</p>*/}
      {/*    10*/}
      {/*  </div>*/}
      {/*</div>*/}

      {isModalActive && (
        <BaseModalComponent>
          <CalendarModalComponent value={dates} onChange={handleSetDates} />
        </BaseModalComponent>
      )}

      <ModalGettingToInstructionsComponent
        title='Тут ти можеш відслідковувати свій стан та досягнення, а відмічаючи впродовж дня свої емоції зможеш заробити'
        coin={true}
        image={ImageCapybaraBook}
        buttonText='Круто!'
        check={`mood-stats`}
      />
    </section>
  )
}
export default StatisticsComponent
