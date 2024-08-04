'use client';
import { FC, useState } from 'react';
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
  politic: boolean;
}
const Contacts: FC = () => {
  const [isSend, setIsSend] = useState(false);
  const form = useForm({
    defaultValues: {
      city: '',
      name: '',
      email: '',
      phone: '',
      description: '',
      file: '',
      politic: true,
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
    console.log(data);

    reset();
    setIsSend(true);
  };

  console.log(errors);

  return (
    <section className="pt-[40px] pb-[88px]">
      <div className="container mx-auto">
        <h1 className="h1 mb-[6px] text-[32px] font-medium leading-none md:mb-[16px] md:text-[40px] lg:mb-[48px] lg:text-[56px]">
          Оставьте заявку
        </h1>
        <div className="flex justify-between gap-[126px]">
          <div className="w-full max-w-[486px]">
            <form
              className="flex flex-col gap-[32px] items-start"
              encType="multipart/form-data"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Select
                {...register('city', { required: true })}
                onValueChange={(value) => setValue('city', value)}
              >
                <SelectTrigger
                  className={`w-full ${errors.city ? 'bg-red-100' : ''}`}
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
                  <SelectItem value="rostov-na-dony">Ростов на дону</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative w-full">
                <input
                  type="text"
                  {...register('name', { required: true, minLength: 1 })}
                  className={`block py-[20px] px-[20px] pb-[4px] w-full text-[16px] text-white bg-[#2F2F2F] appearance-none focus:outline-none focus:ring-0 peer ${
                    errors.name && 'bg-red-100'
                  }`}
                  placeholder=" "
                />
                <label className="absolute  text-white/40 text-[18px] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-[11px] left-[21px] z-10 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Имя
                </label>
              </div>

              <div className="flex gap-[24px] w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    {...register('email', {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    className={`block py-[20px] px-[20px] pb-[4px] w-full text-[16px] text-white bg-[#2F2F2F] appearance-none focus:outline-none focus:ring-0 peer ${
                      errors.email && 'bg-red-100'
                    }`}
                    placeholder=" "
                  />
                  <label className="absolute  text-white/40 text-[18px] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-[11px] left-[21px] z-10 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Email
                  </label>
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    {...register('phone')}
                    className="block py-[20px] px-[20px] pb-[4px] w-full text-[16px] text-white bg-[#2F2F2F] appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label className="absolute  text-white/40 text-[18px] dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-[11px] left-[21px] z-10 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Телефон
                  </label>
                </div>
              </div>

              <Textarea
                {...register('description')}
                placeholder="Оставьте пометку к заказу"
              />
              <label className="relative block w-full bg-[#2F2F2F] overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-[15px] bg-[#2F2F2F] "></div>
                <Input
                  {...register('file')}
                  id="picture"
                  type="file"
                  name="file"
                  className="ml-[-105px] text-[14px] leading-[20px]"
                />
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
              <label className="flex items-center gap-[20px]">
                <Checkbox
                  defaultChecked
                  id="terms1"
                  {...register('politic', {
                    required: 'You must agree to the terms and conditions',
                  })}
                />
                <span className="text-[16px] font-normal leading-[24px] ">
                  Даю согласие на обработку своих персональных данных
                </span>
                {errors.politic && <p>Поставть чексбоес</p>}
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
