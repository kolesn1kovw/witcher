'use client';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Value } from '@radix-ui/react-select';

const contacts = [
  {
    title: 'Наша горячая линия',
    value: '8 800 38 23 112',
  },
  {
    title: 'Главный офис',
    value: 'г. Москва, Садовническая ул., 80',
  },
  {
    title: 'Часы работы',
    value: 'Пн-Пт с 10:00 до 22:00',
  },
];

enum CityEnum {
  moscow = 'Москва',
  saintPetersburg = 'Санкт-Питербург',
  kazan = 'Казань',
  krasnodar = 'Краснодар',
  rostovNaDony = 'Ростов на дону',
}

interface IFormInput {
  city: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  file: string;
  politic: boolean[];
}
const Contacts: FC = () => {
  const [isSend, setIsSend] = useState<boolean>(false);
  const form = useForm({
    defaultValues: {
      city: '',
      name: '',
      email: '',
      phone: '',
      description: '',
      file: '',
      politic: [],
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    reset();
    setIsSend(true);
  };

  return (
    <section className="pt-[40px] pb-[56px] sm:pb-[88px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-[40px] md:gap-[53px] lg:gap-[126px]">
          <div>
            <h1
              className={`h1 mb-[24px] sm:mb-[36px] text-[32px] font-medium leading-none md:text-[40px] lg:mb-[48px] lg:text-[56px] ${
                isSend && 'md:max-w-[320px] lg:mb-[24px]'
              }`}
            >
              {!isSend ? 'Оставьте заявку' : `Заявка отправлена`}
            </h1>
            <div className="w-full max-w-full sm:max-w-[320px] lg:max-w-[486px]">
              {!isSend ? (
                <form
                  className="flex flex-col gap-[24px] lg:gap-[32px] items-start"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="w-full relative">
                    <Select
                      {...register('city', { required: true })}
                      onValueChange={(value) => setValue('city', value)}
                    >
                      <SelectTrigger
                        className={`w-full ${
                          errors.city ? 'bg-[#EC3F3F]/20' : ''
                        }`}
                      >
                        <SelectValue placeholder="Выберете город" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moscow">Москва</SelectItem>
                        <SelectItem value="saint-petersburg">
                          Санкт-Питербург
                        </SelectItem>
                        <SelectItem value="kazan">Казань</SelectItem>
                        <SelectItem value="krasnodar">Краснодар</SelectItem>
                        <SelectItem value="rostov-na-dony">
                          Ростов на дону
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.city && (
                      <p className="absolute bottom-[-20px] left-0 mt-[4px] text-[12px] text-[#FF5858] font-normal leading-[16px]">
                        Город не выбран
                      </p>
                    )}
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
                      {...register('name', { required: true, minLength: 1 })}
                      className={`block py-[20px] px-[20px] pb-[4px] w-full text-[16px] text-white bg-[#2F2F2F] appearance-none focus:outline-none focus:ring-0 peer ${
                        errors.name ? 'bg-[#EC3F3F]/20' : ''
                      }`}
                      placeholder=" "
                    />
                    <label className="absolute  text-white/40 text-[18px] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-[11px] left-[22px] z-10 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Имя
                    </label>
                    {errors.name && (
                      <p className="absolute bottom-[-20px] left-0 mt-[4px] text-[12px] text-[#FF5858] font-normal leading-[16px]">
                        Поле не заполненно
                      </p>
                    )}
                  </div>

                  <div className="flex gap-[24px] w-full sm:flex-col lg:flex-row">
                    <div className="relative w-full">
                      <input
                        type="text"
                        {...register('email', {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        className={`block py-[20px] px-[20px] pb-[4px] w-full text-[16px] text-white bg-[#2F2F2F] appearance-none focus:outline-none focus:ring-0 peer ${
                          errors.email ? 'bg-[#EC3F3F]/20' : ''
                        }`}
                        placeholder=" "
                      />
                      <label className="absolute  text-white/40 text-[18px] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-[11px] left-[22px] z-10 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Email
                      </label>
                      {errors.name && (
                        <p className="absolute bottom-[-20px] left-0 mt-[4px] text-[12px] text-[#FF5858] font-normal leading-[16px]">
                          Поле не заполненно
                        </p>
                      )}
                    </div>

                    <div className="relative w-full">
                      <input
                        type="text"
                        {...register('phone', {
                          required: true,
                        })}
                        className={`block py-[20px] px-[20px] pb-[4px] w-full text-[16px] text-white bg-[#2F2F2F] appearance-none focus:outline-none focus:ring-0 peer ${
                          errors.phone ? 'bg-[#EC3F3F]/20' : ''
                        }`}
                        placeholder=" "
                      />
                      <label className="absolute  text-white/40 text-[18px] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-[11px] left-[22px] z-10 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        Телефон
                      </label>
                      {errors.phone && (
                        <p className="absolute bottom-[-20px] left-0 mt-[4px] text-[12px] text-[#FF5858] font-normal leading-[16px]">
                          Поле не заполненно
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="relative w-full">
                    <Textarea
                      {...register('description', {
                        required: true,
                      })}
                      placeholder="Оставьте пометку к заказу"
                      className={`${errors.description ? 'bg-[#422020]' : ''}`}
                    />
                    {errors.description && (
                      <p className="absolute bottom-[-20px] left-0 mt-[4px] text-[12px] text-[#FF5858] font-normal leading-[16px]">
                        Поле не заполненно
                      </p>
                    )}
                  </div>
                  <div className="relative w-full">
                    <label
                      className={`relative block w-full bg-[#2F2F2F] overflow-hidden ${
                        errors.file ? 'bg-[#422020]' : ''
                      }`}
                    >
                      <div
                        className={`absolute top-0 left-0 h-full w-[15px] bg-[#2F2F2F] ${
                          errors.file ? 'bg-[#422020]' : ''
                        }`}
                      ></div>

                      <Input
                        {...register('file', {
                          required: true,
                        })}
                        type="file"
                        name="file"
                        className={`ml-[-105px] text-[14px] leading-[20px] ${
                          errors.file ? 'bg-[#422020]' : ''
                        }`}
                      />
                      {errors.file && (
                        <p className="absolute bottom-[-20px] left-0 mt-[4px] text-[12px] text-[#FF5858] font-normal leading-[16px]">
                          Поле не заполненно
                        </p>
                      )}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute top-[17px] right-[20px]"
                      >
                        <g opacity="0.8">
                          <g clipPath="url(#clip0_48_176)">
                            <path
                              d="M20.324 10.3306L12.8606 19.7273C11.1458 21.8861 7.9944 22.2475 5.83552 20.5328C3.67664 18.818 3.31529 15.6666 5.03001 13.5077L12.4935 4.11108C13.5222 2.81591 15.4133 2.59907 16.7085 3.62778C18.0036 4.65649 18.2205 6.54763 17.1918 7.8428L11.5942 14.8903C11.2515 15.3218 10.6207 15.3941 10.1892 15.0514C9.75773 14.7087 9.68539 14.0778 10.0281 13.6464L15.0037 7.38195L13.4376 6.13804L8.46198 12.4025C7.4314 13.7 7.64776 15.5869 8.94528 16.6175C10.2428 17.6481 12.1297 17.4317 13.1603 16.1342L18.7579 9.08671C20.4751 6.9247 20.1144 3.77888 17.9524 2.06167C15.7904 0.344458 12.6446 0.705163 10.9273 2.86718L3.4639 12.2638C1.05943 15.2911 1.56432 19.6944 4.59161 22.0989C7.6189 24.5034 12.0222 23.9985 14.4267 20.9712L21.8901 11.5745L20.324 10.3306Z"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_48_176">
                            <rect width="24" height="24" rx="1" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </label>
                    {errors.file && (
                      <p className="absolute bottom-[-20px] left-0 mt-[4px] text-[12px] text-[#FF5858] font-normal leading-[16px]">
                        Поле не заполненно
                      </p>
                    )}
                  </div>

                  <label className="relative custom-checkbox flex">
                    <input
                      type="checkbox"
                      className="custom-checkbox__input"
                      {...register('politic', {
                        required: 'You must agree to the terms and conditions',
                      })}
                    />
                    <span
                      className={`custom-checkbox__text text-[16px] font-normal leading-[24px] ${
                        errors.politic ? 'invalid' : ''
                      }`}
                    >
                      Даю согласие на обработку своих персональных данных
                    </span>
                    {errors.politic && (
                      <p className="absolute bottom-[-20px] left-0 mt-[4px] text-[12px] text-[#FF5858] font-normal leading-[16px]">
                        Поле не заполненно
                      </p>
                    )}
                  </label>

                  <Button type="submit" variant="accent">
                    Отправить заявку
                  </Button>
                </form>
              ) : (
                <div>
                  <p className="mb-[40px] text-[16px] font-normal leading-[20px]">
                    Мы получили вашу заявку. Наши специалисты свяжутся с вами в
                    ближайшее время, чтобы уточнить все детали заказа.
                  </p>
                  <Link href={'/'}>
                    <Button variant="accent">Вернуться на главную</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <ul
            className={`flex flex-col gap-[24px] sm:gap-[32px] flex-1 ${
              !isSend
                ? 'pt-[0] sm:pt-[35px] md:pt-[75px] lg:pt-[100px] '
                : 'pt-[0px]'
            }`}
          >
            {contacts.map((contact, index) => (
              <li key={index}>
                <p className="mb-[4px] sm:mb-[8px] font-normal text-[16px] text-white/60 leading-[20px]">
                  {contact.title}
                </p>
                <p
                  className={`text-[24px] ${
                    index === 0 && 'text-[28px] sm:text-[32px]'
                  } font-medium leading-[32px] lg:text-[32px] lg:leading-[40px]`}
                >
                  {contact.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
