'use client'
import { useRouter } from 'next/navigation'

import { FC } from 'react'

import { ButtonComponent, PageHeaderComponent } from '@/shared/components'

import styles from './privacy-policy.module.scss'

//interface
interface ISettings {}

//component
export const PrivacyPolicyComponent: FC<Readonly<ISettings>> = () => {
  const router = useRouter()
  const handle = () => {
    router.push('/')
  }
  //return
  return (
    <section className={`${styles.privacy} container`}>
      <PageHeaderComponent title='Політика конфіденційності' />

      <p className='text-4'>
        iStrong в особі Громадської спілки «Асоціація наставництва для дітей та молоді», код ЄДРПОУ
        42387194 («ми», «наш» або «нас») прагне захищати Вашу конфіденційність. У цій Політиці
        конфіденційності пояснюється, як Ваша особиста інформація збирається, використовується та
        розкривається iStrong. Ця Політика конфіденційності застосовується до нашого додатка та
        пов’язаних із ним субдоменів (разом – «Сервіс»). Отримуючи доступ або використовуючи наш
        Сервіс, Ви підтверджуєте, що прочитали, зрозуміли та погоджуєтеся на збір, зберігання,
        використання та розкриття Вашої особистої інформації, як описано в цій Політиці
        конфіденційності та наших Умовах обслуговування.
      </p>
      <h2 className='text-3'>Визначення та ключові терміни</h2>
      <p className='text-4'>
        Щоб якомога зрозуміліше пояснити речі в цій Політиці конфіденційності, кожен раз, коли
        згадується будь-який із цих термінів, вони суворо визначаються як: Компанія: коли в цій
        політиці згадується «Компанія», «ми», «нас» або «наш», це стосується Громадської спілки
        «Асоціація наставництва для дітей та молоді», код ЄДРПОУ 42387194, Київ, Україна, яка
        відповідає за вашу інформацію відповідно до цієї Політики конфіденційності. Країна: де
        розташовані iStrong або власники/засновники iStrong, у цьому випадку це Україна. Пристрій:
        будь-який пристрій, підключений до Інтернету, наприклад телефон, планшет, комп’ютер або
        будь-який інший пристрій, який можна використовувати для відвідування iStrong і використання
        послуг. IP-адреса: кожному пристрою, підключеному до Інтернету, присвоюється номер, відомий
        як адреса Інтернет-протоколу (IP). Ці номери зазвичай призначаються географічними блоками.
        IP-адресу часто можна використовувати для визначення місця, з якого пристрій підключається
        до Інтернету. Персонал: відноситься до тих осіб, які працюють у iStrong або мають контракт
        для надання послуг від імені однієї зі сторін. Персональні дані: будь-яка інформація, яка
        прямо, опосередковано або у зв’язку з іншою інформацією, включаючи персональний
        ідентифікаційний номер, дозволяє ідентифікувати фізичну особу. Сервіс/додаток: належать до
        сервісу, який надає iStrong, як описано у відповідних умовах (якщо доступно) і на цій
        платформі. Послуги: набір інформаційно-консультаційних послуг, що надаються iStrong онлайн в
        порядку та на умовах, визначених Договором із кінцевим користувачем. Послуги не є медичними
        послугами, носять інформаційний та консультаційний характер. Послуги третіх сторін:
        стосуються рекламодавців, спонсорів конкурсів, рекламних і маркетингових партнерів та інших
        осіб, які надають наш вміст або чиї продукти чи послуги, на нашу думку, можуть Вас
        зацікавити. Ви/Кінцевий користувач: фізична особа, яка зареєстрована в iStrong для
        використання Послуг.
      </p>
      <h2 className='text-3'>Яку інформацію ми збираємо?</h2>
      <p className='text-4'>
        Ми збираємо інформацію від Вас, коли Ви відвідуєте наш додаток, реєструєтесь у нашому
        застосунку, підписуєтесь на нашу розсилку, відповідаєте на опитування, берете участь у
        челенджах або заповнюєте щоденник. Ми збираємо наступну інформацію: ім’я; номер телефону; за
        бажанням, особисте фото; електронну пошту; геолокацію; IP-адресу; тип пристрою; особисті
        нотатки, котрими Ви будете ділитися впродовж користування додатком; історія Вашого
        спілкування з персоналом iStrong з використанням технологій ручного фіксування даних, в тому
        числі стенографії та будь-яких запам’ятовувальних або реєстраційних пристроїв. Ми також
        збираємо інформацію з мобільних пристроїв для кращої взаємодії з користувачем, хоча ці
        функції абсолютно необов’язкові:
      </p>
      <h2 className='text-3'>Як ми використовуємо інформацію, яку збираємо?</h2>
      <p className='text-4'>
        Будь-яка інформація, яку ми збираємо від Вас, може бути використана одним із таких способів:
        1. передача інформації Професіоналам, які надають свої послуги через додаток, завжди
        дотримуючись критеріїв конфіденційності; 2. надання або передача інформації непов’язаним
        третім особам у випадках: 2.1 Вашої вимоги; 2.2.для виконання юридичного зобов’язання або
        вимоги державної установи чи суду; 2.3. для розслідування можливого злочину, наприклад
        крадіжки особистих даних.
      </p>
      <h2 className='text-3'>
        Коли iStrong використовує інформацію кінцевого користувача від третіх сторін?
      </h2>
      <p className='text-4'>
        iStrong збиратиме дані кінцевого користувача, необхідні для надання послуг iStrong. Кінцеві
        користувачі можуть добровільно надавати нам інформацію, яку вони опублікували на вебсайтах
        соціальних мереж. Якщо Ви надаєте нам таку інформацію, ми можемо збирати загальнодоступну
        інформацію з вебсайтів соціальних мереж, які ви вказали. Ви можете контролювати, скільки
        вашої інформації вебсайти соціальних мереж оприлюднюють, відвідавши ці вебсайти та змінивши
        конфіденційність.
      </p>
      <h2 className='text-3'>Чи передаємо ми зібрану інформацію третім особам?</h2>
      <p className='text-4'>
        Ми можемо надавати інформацію, яку збираємо, як особисту, так і неособисту, третім особам,
        таким як рекламодавці, спонсори конкурсів, рекламні та маркетингові партнери та інші, чиї
        продукти чи послуги, на нашу думку, можуть Вас зацікавити. Ми також можемо ділитися нею з
        нашими поточними та майбутніми афілійованими компаніями та діловими партнерами, і якщо ми
        беремо участь у злитті, продажу активів або іншій реорганізації бізнесу, ми також можемо
        ділитися або передавати Вашу особисту та неособисту інформацію нашим правонаступникам. Ми
        можемо залучати довірених сторонніх постачальників послуг для виконання функцій і надання
        нам послуг, таких як розміщення та підтримка наших серверів і додатку, зберігання та
        керування базами даних, керування електронною поштою, маркетинг зберігання. Ймовірно, ми
        надамо Вашу особисту інформацію та, можливо, деяку неособисту інформацію цим третім особам,
        щоб вони могли надавати ці послуги для нас і для Вас. Ми можемо ділитися частинами даних
        нашого журналу, включаючи IP-адреси, для цілей аналітики третім сторонам, такими як партнери
        з вебаналітики, розробники додатків і рекламні мережі. Якщо Ваша IP-адреса спільна, вона
        може використовуватися для оцінки загального розташування та інших технічних даних, таких як
        швидкість з’єднання, чи відвідували Ви додаток у спільному місці та тип пристрою, який
        використовується для відвідування додатка. Вони можуть збирати інформацію про те, що Ви
        бачите у додатку, а потім надавати аудит, дослідження та звітність для нас і наших
        рекламодавців. Ми також можемо розкривати особисту та неособисту інформацію про Вас
        представникам державних чи правоохоронних органів або приватним особам, якщо ми, на власний
        розсуд, вважаємо це необхідним або доречним для відповіді на претензії, судовий процес
        (включаючи повістки до суду), щоб захистити наші права та інтереси або інтереси третьої
        сторони, безпеку громадськості чи будь-якої особи, щоб запобігти або припинити будь-яку
        незаконну, неетичну чи юридичну діяльність або іншим чином виконувати відповідні судові
        розпорядження, закони, правила та положення.
      </p>
      <h2 className='text-3'>Де і коли збирається інформація від кінцевих користувачів?</h2>
      <p className='text-4'>
        iStrong збиратиме особисту інформацію, яку Ви нам надсилаєте. Ми також можемо отримувати
        особисту інформацію про Вас від третіх осіб, як описано вище.
      </p>
      <h2 className='text-3'>Як ми використовуємо Вашу електронну адресу?</h2>
      <p className='text-4'>
        Надсилаючи свою адресу електронної пошти у цьому додатку, Ви погоджуєтесь отримувати
        електронні листи від нас. Ви можете скасувати свою участь у будь-якому з цих списків
        розсилки в будь-який час, натиснувши посилання для відмови або іншу опцію скасування
        підписки, яка міститься у відповідному електронному листі. Ми надсилаємо електронні листи
        лише тим людям, які дозволили нам зв’язуватися з ними безпосередньо чи через третю сторону.
        Ми не надсилаємо небажаних комерційних електронних листів, тому що ненавидимо спам, так само
        як і Ви. Надсилаючи свою адресу електронної пошти, Ви також погоджуєтеся використовувати
        Вашу адресу електронної пошти для націлювання на аудиторію клієнтів на таких сайтах, як
        Facebook, де ми показуємо спеціальну рекламу конкретним людям, які погодилися отримувати від
        нас повідомлення. Адреси електронної пошти, надіслані лише на сторінці обробки замовлення,
        використовуватимуться виключно з метою надсилання вам інформації та оновлень, що стосуються
        Вашого замовлення. Однак якщо Ви надали нам ту саму електронну адресу іншим способом, ми
        можемо використовувати її для будь-якої з цілей, зазначених у цій Політиці. Примітка. Якщо в
        будь-який момент ви захочете скасувати підписку на отримання електронних листів у
        майбутньому, ми додаємо детальні інструкції щодо скасування підписки внизу кожного
        електронного листа.
      </p>
      <h2 className='text-3'>Як довго ми зберігаємо Вашу інформацію?</h2>
      <p className='text-4'>
        Ми зберігаємо Вашу інформацію лише до тих пір, поки вона нам потрібна для надання Вам
        iStrong і досягнення цілей, описаних у цій політиці. Це також стосується всіх, кому ми
        надаємо вашу інформацію та хто надає послуги від нашого імені. Коли нам більше не потрібно
        буде використовувати вашу інформацію та зберігати її для дотримання наших юридичних або
        нормативних зобов’язань, ми або видалимо її з наших систем, або знеособимо, щоб ми не могли
        ідентифікувати Вас. Зберігання Вашої інформації після припинення використання Вами додатку
        триватиме пів року.
      </p>
      <h2 className='text-3'>Як ми захищаємо Вашу інформацію?</h2>
      <p className='text-4'>
        Ми застосовуємо низку заходів безпеки, щоб забезпечити безпеку Вашої особистої інформації,
        коли Ви використовуєте наш додаток. Однак ми не можемо гарантувати абсолютну безпеку
        будь-якої інформації, яку Ви передаєте iStrong, або гарантувати, що Ваша інформація на
        Сервісі не може бути доступна, розголошена, змінена чи знищена через порушення будь-якої
        нашої фізичної, технічної чи управлінської гарантії.
      </p>
      <h2 className='text-3'>Чи може моя інформація бути передана в інші країни?</h2>
      <p className='text-4'>
        iStrong зареєстрована в Україні. Інформація, зібрана через наш додаток, через пряму
        взаємодію з Вами або в результаті використання наших довідкових служб, може час від часу
        передаватись третім сторонам, розташованим у всьому світі, і може переглядатися та
        розміщуватися будь-де в світі, включаючи країни, які можуть не мати законів загального
        застосування, що регулюють використання та передачу таких даних. У повному обсязі,
        дозволеному чинним законодавством, використовуючи будь-що з вищезазначеного, Ви добровільно
        погоджуєтеся на транскордонну передачу та розміщення такої інформації.
      </p>
      <h2 className='text-3'>Чи захищена інформація, зібрана через службу iStrong?</h2>
      <p className='text-4'>
        Ми вживаємо заходів для захисту Вашої інформації. У нас є фізичні, електронні та
        управлінські процедури, які допомагають захистити, запобігти несанкціонованому доступу,
        підтримувати безпеку даних і правильно використовувати Вашу інформацію. Однак ані люди, ані
        системи безпеки не є надійними, включаючи системи шифрування. Крім того, люди можуть
        скоювати навмисні злочини, робити помилки або не виконувати політику. Таким чином, хоча ми
        докладаємо розумних зусиль для захисту вашої особистої інформації, ми не можемо гарантувати
        її абсолютну безпеку. Якщо застосовне законодавство накладає обов’язок щодо захисту Вашої
        особистої інформації, який не підлягає запереченню, Ви погоджуєтеся, що навмисне порушення
        буде стандартом, який використовується для вимірювання дотримання цим обов’язком.
      </p>
      <h2 className='text-3'>Чи можу я оновити або виправити свою інформацію?</h2>
      <p className='text-4'>
        Ваші права вимагати оновлення або виправлення інформації, яку iStrong збирає, залежать від
        Ваших відносин із iStrong. Персонал може оновлювати або виправляти свою інформацію, як
        зазначено у внутрішніх правилах працевлаштування нашої компанії. Ви маєте право вимагати
        обмеження певного використання та розкриття особистої інформації, як зазначено нижче. Ви
        можете зв’язатися з нами, щоб (1) оновити або виправити Вашу особисту інформацію, (2)
        змінити свої налаштування щодо повідомлень та іншої інформації, яку Ви отримуєте від нас,
        або (3) видалити особисту інформацію, яка зберігається про Вас у нашій системі (з
        урахуванням наступного абзацу), скасувавши свій обліковий запис. Такі оновлення,
        виправлення, зміни та видалення не впливатимуть на іншу інформацію, яку ми зберігаємо, або
        інформацію, яку ми надали третім особам відповідно до цієї Політики конфіденційності до
        такого оновлення, виправлення, зміни чи видалення. Щоб захистити Вашу конфіденційність і
        безпеку, ми можемо вжити розумних заходів (наприклад, запросити унікальний пароль), щоб
        підтвердити вашу особу, перш ніж надавати Вам доступ до профілю або вносити виправлення. Ви
        несете відповідальність за збереження в таємниці свого унікального пароля та інформації
        облікового запису в будь-який час. Ви повинні знати, що технологічно неможливо видалити з
        нашої системи кожен запис інформації, яку Ви надали нам. Необхідність резервного копіювання
        наших систем для захисту інформації від ненавмисної втрати означає, що копія вашої
        інформації може існувати в нестираємій формі, яку нам буде важко або неможливо знайти.
        Негайно після отримання вашого запиту вся особиста інформація, що зберігається в базах
        даних, які ми активно використовуємо, та в інших медіафайлах, доступних для пошуку, буде
        оновлена, виправлена, змінена або видалена, залежно від обставин, якомога швидше та в
        обсязі, який є розумно та технічно можливим. Якщо Ви є кінцевим користувачем і бажаєте
        оновити, видалити або отримати будь-яку інформацію, яку ми маємо про Вас, Ви можете зробити
        це, звернувшись до служби підтримки iStrong.
      </p>
      <h2 className='text-3'>Право, що регулює</h2>
      <p className='text-4'>
        Ця Політика конфіденційності регулюється законодавством України без урахування колізійного
        права. Ви погоджуєтеся на виключну юрисдикцію судів у зв’язку з будь-якими діями чи
        суперечками, що виникають між сторонами відповідно до цієї Політики конфіденційності або у
        зв’язку з нею. Закони України, за винятком колізійних норм, регулюють цю Угоду та
        використання Вами додатку. Використання вами програми також може регулюватися іншими
        місцевими, державними, національними чи міжнародними законами. Ви підтверджуєте, що
        погоджуєтеся із Політикою конфіденційності та Договором із кінцевим споживачем шляхом
        проставлення відмітки у спеціальному полі при реєстрації у додатку iStrong. Якщо Ви не
        згодні з цією Політикою конфіденційності, Вам не слід працювати з нашим застосунком.
        Продовження використання застосунку, безпосередня взаємодія з нами або публікація змін до
        цієї Політики конфіденційності, які суттєво не впливають на використання чи розкриття Вашої
        особистої інформації, означатимуть, що Ви приймаєте ці зміни.
      </p>
      <h2 className='text-3'>Посилання на інші вебсайти</h2>
      <p className='text-4'>
        Ця Політика конфіденційності стосується лише використання нашого додатка. iStrong. Додаток
        може містити посилання на інші вебсайти, якими не керує iStrong. Ми не несемо
        відповідальності за зміст, точність або думки, висловлені на таких вебсайтах, і такі
        вебсайти не досліджуються, не контролюються та не перевіряються на точність або повноту.
        Будь ласка, пам’ятайте, що коли Ви використовуєте посилання для переходу з Послуг на інший
        вебсайт, наша Політика конфіденційності більше не діє. Ваш перегляд і взаємодія на
        будь-якому іншому вебсайті, включно з тими, які мають посилання на нашій платформі,
        регулюється власними правилами та політикою цього вебсайту. Такі треті сторони можуть
        використовувати власні файли cookie або інші методи для збору інформації про вас.
      </p>
      <h2 className='text-3'>Реклама</h2>
      <p className='text-4'>
        Цей додаток може містити рекламу третіх сторін і посилання на сторонні сайти. iStrong не
        робить жодних заяв щодо точності чи придатності будь-якої інформації, що міститься в цих
        рекламних оголошеннях або на сайтах, і не бере на себе жодної відповідальності за поведінку
        чи зміст цих рекламних оголошень і сайтів, а також пропозицій, зроблених третіми сторонами.
        Реклама третіх сторін і посилання на інші сайти, де рекламуються товари або послуги, не є
        підтримкою або рекомендацією iStrong щодо сайтів, товарів або послуг третіх сторін. iStrong
        не несе відповідальності за зміст будь-якої реклами, дані обіцянки або якість/надійність
        продуктів чи послуг, які пропонуються в усіх рекламах.
      </p>
      <div className={styles.privacy__position}>
        <ButtonComponent onClick={handle}>Зрозуміло</ButtonComponent>
      </div>
    </section>
  )
}
export default PrivacyPolicyComponent
