'use client';
import { forwardRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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

enum CityEnum {
  moscow = 'Москва',
  saintPetersburg = 'Санкт-Питербург',
  kazan = 'Казань',
  krasnodar = 'Краснодар',
  rostovNaDony = 'Ростов на дону',
}

interface IFormInput {
  city: CityEnum;
  name: string;
  email: string;
  phone: string;
  description: string;
  file: string;
}

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

const Contacts = () => {
  const [isSend, setIsSend] = useState(false);
  const form = useForm();
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
    setIsSend(true);
  };

  return (
    <section className="pt-[40px] pb-[88px]">
      <div className="container mx-auto">
        <h1 className="h1 mb-[6px] text-[32px] font-medium leading-none md:mb-[16px] md:text-[40px] lg:mb-[48px] lg:text-[56px]">
          Оставьте заявку
        </h1>
        <div className="flex justify-between gap-[126px]">
          <div className="w-full max-w-[486px]">
            <form
              encType="multipart/form-data"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* <select {...register('city')}>
                <option value="moscow">Москва</option>
                <option value="saint-petersburg">Санкт-Питербург</option>
                <option value="kazan">Казань</option>
                <option value="krasnodar">Краснодар</option>
                <option value="rostov-na-dony">Ростов на дону</option>
              </select> */}
              <div className="relative">
                <input
                  type="text"
                  {...register('name')}
                  className="block py-[20px] px-[20px] pb-[4px] w-full text-[16px] text-white bg-white/10 appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label className="absolute  text-white/40 text-[18px] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 left-[20px] z-10 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Имя
                </label>
              </div>

              <div className="flex gap-[24px]">
                <div className="relative w-full">
                  <input
                    type="text"
                    {...register('email')}
                    className="block py-[20px] px-[20px] pb-[4px] w-full text-[16px] text-white bg-white/10 appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label className="absolute  text-white/40 text-[18px] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 left-[20px] z-10 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Email
                  </label>
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    {...register('phone')}
                    className="block py-[20px] px-[20px] pb-[4px] w-full text-[16px] text-white bg-white/10 appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label className="absolute  text-white/40 text-[18px] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 left-[20px] z-10 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Телефон
                  </label>
                </div>
              </div>

              <Textarea {...register('description')} />
              <input
                {...register('file')}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <label>
                <Checkbox id="terms1" />
                <span>Даю согласие на обработку своих персональных данных</span>
              </label>
              <Button type="submit" variant="accent">
                Отправить заявку
              </Button>
            </form>
          </div>
          <ul className="flex flex-col gap-[32px] flex-1">
            {contacts.map((contact, index) => (
              <li key={index}>
                <p className="mb-[8px] font-normal text-[16px] text-white/60 leading-[20px]">
                  {contact.title}
                </p>
                <p className="text-[24px] font-medium leading-[32px] lg:text-[32px] lg:leading-[40px]">
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
