'use client'
import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import { ButtonComponent, PageHeaderComponent } from '@/shared/components'
import { ImageCapybaraHeart } from '@/shared/images'

import styles from './help.module.scss'

interface IHelpComponent {}

//component
export const HelpComponent: FC<Readonly<IHelpComponent>> = () => {
  return (
    <section className={`${styles.help} container`}>
      <div className={styles.help__top}>
        <PageHeaderComponent title={'Служба психологічної підтримки'} />

        <div className={styles.help__wrap}>
          <Image
            src={ImageCapybaraHeart}
            alt={`Capybara`}
            sizes={'60vw'}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            priority
          />
        </div>
      </div>

      <Link href={'tel:0800500225'}>
        <ButtonComponent>Подзвонити!</ButtonComponent>
      </Link>
    </section>
  )
}
export default HelpComponent
