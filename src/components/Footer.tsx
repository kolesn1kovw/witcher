'use client';
import { FC } from 'react';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const politicContent = [
  {
    title: '1. Что регулирует настоящая политика конфиденциальности',
    description:
      'Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей информации, включая персональные данные в понимании применимого законодательства (далее — «Персональная информация»), которую ООО «Гросс маркет» и/или его аффилированные лица, в том числе входящие в одну группу с ООО «Гросс маркет» (далее — «Гросс маркет»), могут получитьо Вас в процессе использования Вами любых сайтов, программ, продуктов и/или сервисов Гросс маркет (далее вместе  «Сервисы»), информацию о которых Гросс маркет может также получать Персональную информацию от своих партнеров (далее — «Партнеры»), сайты, программы, продукты или сервисы которых Вы используете (например, от рекламодателей Гросс маркет или службами такси). В таких случаях передача Персональной информации возможна только в случаях, установленных применимым законодательством, и осуществляется на основании специальных договоров между Гросс маркет и каждым из Партнеров. Защита Вашей Персональной информации и Вашей конфиденциальности чрезвычайно важны для Гросс маркета. Поэтому при использовании Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу Персональную информацию в строгом соответствии с применимым законодательством.',
  },

  {
    title: '2. Кто обрабатывает информациюи',
    description:
      'Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается и используется Яндексом, в том числе включая общество с ограниченной ответственностью «Гросс маркет», юридическое лицо, созданное по законодательству Российской Федерации и зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его аффилированным лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С информацией о том, какое лицо предоставляет тот или иной Сервис, Вы можете ознакомиться в условиях использования соответствующего Сервиса.',
  },

  {
    title: '3. Какова цель данной Политики',
    description:
      'Защита Вашей Персональной информации и Вашей конфиденциальности чрезвычайно важны для Гросс маркета. Поэтому при использовании Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу Персональную информацию в строгом соответствии с применимым законодательством.',
  },
];

const Footer: FC = () => {
  return (
    <footer className="py-[28px] md:py-[42px] bg-[#343338]">
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        <Link href={'/'}>
          <img
            src="./images/logo.png"
            alt="Ведьмак Серия Игр"
            width="130px"
            height="44px"
            className="pt-[4px] order-1"
          />
        </Link>
        <AlertDialog>
          <AlertDialogTrigger className="block text-left sm:text-center mt-[32px] sm:mt-[0] order-3 sm:order-2 sm:inline-block opacity-[0.7] underline max-w-full w-full sm:max-w-[183px] text-[14px] leading-[20px] transition-opacity linear duration-[250] hover:opacity-[1] ">
            Политика обработки персональных данных
          </AlertDialogTrigger>
          <AlertDialogContent className="max-h-full sm:max-h-[calc(100vh-100px)] w-full sm:w-[calc(100vw-48px)] overflow-y-auto py-[50px]">
            <AlertDialogHeader>
              <AlertDialogTitle className="mb-[15px] leading-[24px] lg:mb-[32px] text-left text-[24px] sm:text-[32px] sm:leading-[40px] lg:text-[40px] lg:leading-[48px]">
                Обработка данных
              </AlertDialogTitle>
              <div className="text-black flex flex-col items-start gap-[23px] sm:gap-[32px] lg:gap-[64px]">
                {politicContent.map((point, index) => (
                  <div key={index}>
                    <h5 className="mb-[30px] text-black text-[16px] text-left font-medium leading-[20px]">
                      {point.title}
                    </h5>
                    <p className="text-black text-[16px] text-left leading-[20px] font-normal">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 3L3 21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 21L3 3"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <ul className="flex gap-[12px] sm:gap-[16px] xl:gap-[20px] order-2 sm:order-3">
          <li className="social">
            <a href="https://vk.com/nova_digital_agency" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_5417_24)">
                  <path
                    d="M6 8C6 6.89543 6.89543 6 8 6H24C25.1046 6 26 6.89543 26 8V24C26 25.1046 25.1046 26 24 26H8C6.89543 26 6 25.1046 6 24V8Z"
                    fill="#343338"
                    className="white"
                  />
                  <path
                    d="M21.5 11.5C20.9477 11.5 20.5 11.0523 20.5 10.5C20.5 9.94774 20.9477 9.5 21.5 9.5C22.0523 9.5 22.5 9.94774 22.5 10.5C22.4998 11.0523 22.0523 11.5 21.5 11.5Z"
                    fill="#D6D6D7"
                  />
                  <path
                    d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM25.1321 19.7878C25.0876 20.7659 24.9321 21.4336 24.7051 22.0181C24.2278 23.2522 23.2522 24.2278 22.0181 24.7051C21.4338 24.9321 20.7659 25.0874 19.7881 25.1321C18.8083 25.1768 18.4954 25.1875 16.0002 25.1875C13.5049 25.1875 13.1921 25.1768 12.2122 25.1321C11.2344 25.0874 10.5664 24.9321 9.98218 24.7051C9.3689 24.4744 8.81372 24.1128 8.35474 23.6453C7.88745 23.1865 7.52588 22.6311 7.29517 22.0181C7.06812 21.4338 6.9126 20.7659 6.86816 19.7881C6.823 18.8081 6.8125 18.4951 6.8125 16C6.8125 13.5049 6.823 13.1919 6.86792 12.2122C6.91235 11.2341 7.06763 10.5664 7.29468 9.98193C7.52539 9.3689 7.88721 8.81348 8.35474 8.35474C8.81348 7.88721 9.3689 7.52563 9.98193 7.29492C10.5664 7.06787 11.2341 6.9126 12.2122 6.86792C13.1919 6.82324 13.5049 6.8125 16 6.8125C18.4951 6.8125 18.8081 6.82324 19.7878 6.86816C20.7659 6.9126 21.4336 7.06787 22.0181 7.29468C22.6311 7.52539 23.1865 7.88721 23.6455 8.35474C24.1128 8.81372 24.4746 9.3689 24.7051 9.98193C24.9324 10.5664 25.0876 11.2341 25.1323 12.2122C25.177 13.1919 25.1875 13.5049 25.1875 16C25.1875 18.4951 25.177 18.8081 25.1321 19.7878Z"
                    fill="#D6D6D7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0042 18.8364C17.5468 18.8364 18.7974 17.5859 18.7974 16.0432C18.7974 14.5006 17.5468 13.25 16.0042 13.25C14.4615 13.25 13.2109 14.5006 13.2109 16.0432C13.2109 17.5859 14.4615 18.8364 16.0042 18.8364ZM16.0042 20.0864C18.2372 20.0864 20.0474 18.2762 20.0474 16.0432C20.0474 13.8102 18.2372 12 16.0042 12C13.7711 12 11.9609 13.8102 11.9609 16.0432C11.9609 18.2762 13.7711 20.0864 16.0042 20.0864Z"
                    fill="#D6D6D7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5417_24">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li className="social">
            <a
              href="https://career.habr.com/companies/nova-test"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_5417_21)">
                  <path
                    d="M20.0003 10.6667H18.2003C17.483 10.6667 17.3337 10.9614 17.3337 11.704V13.3334H20.0003L19.7217 16H17.3337V25.3334H13.3337V16H10.667V13.3334H13.3337V10.256C13.3337 7.89735 14.575 6.66669 17.3723 6.66669H20.0003V10.6667Z"
                    fill="#343338"
                    className="white"
                  />
                  <path
                    d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM20 10.6667H18.2C17.4827 10.6667 17.3333 10.9613 17.3333 11.704V13.3333H20L19.7213 16H17.3333V25.3333H13.3333V16H10.6667V13.3333H13.3333V10.256C13.3333 7.89733 14.5747 6.66667 17.372 6.66667H20V10.6667Z"
                    fill="#D6D6D7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5417_21">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li className="social">
            <a href="https://vk.com/nova_digital_agency" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_5417_28)">
                  <path
                    d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0Z"
                    fill="#D6D6D7"
                  />
                  <path
                    d="M21.8957 22.4947H24.5629C25.2343 22.4947 25.5 22.2713 25.5 21.9216C25.5 21.1825 24.3157 19.8762 23.3143 18.9196L23.2688 18.8762C21.9059 17.5758 21.856 17.5282 23.0529 15.9309C24.5543 13.9266 26.5186 11.3581 24.7814 11.3581H21.4643C20.8186 11.3581 20.7729 11.7314 20.5457 12.2868C19.7129 14.2984 18.1386 16.9036 17.54 16.5054C16.9129 16.0896 17.2 14.4439 17.2486 11.9958C17.2629 11.3493 17.2586 10.9056 16.2971 10.6763C15.7743 10.5514 15.2629 10.5 14.7914 10.5C12.8971 10.5 11.5886 11.317 12.3314 11.458C13.64 11.7093 13.5157 14.6231 13.21 15.8809C12.6771 18.0718 10.6814 14.147 9.84714 12.1913C9.64571 11.7225 9.58571 11.3567 8.86714 11.3567H6.15571C5.74571 11.3567 5.5 11.4933 5.5 11.7989C5.5 12.3147 7.96714 17.559 10.32 20.173C12.62 22.7239 14.89 22.4947 16.4686 22.4947C16.9743 22.4947 17.1843 22.1464 17.1757 21.71C17.15 20.0672 17.7714 19.1827 18.8929 20.3361C20.1357 21.6116 20.3886 22.4947 21.8957 22.4947Z"
                    fill="#343338"
                    className="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5417_28">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
