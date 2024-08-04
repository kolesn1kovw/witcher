'use client';
import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Button } from '@/components/ui/button';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  city: z.string(),
  name: z.string().min(2, {
    message: 'Поле не заполненно',
  }),

  email: z
    .string()
    .min(1, { message: 'Поле не заполненно' })
    .email('This is not a valid email.'),

  phone: z
    .string()
    .min(10, { message: 'Поле не заполненно' })
    .max(14, { message: 'Поле не заполненно' }),
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        placeholder=" "
        className={cn('peer', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
FloatingInput.displayName = 'FloatingInput';

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        'peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-2 z-10 origin-[0] font-regular -translate-y-4 scale-75 transform bg-background px-2 text-sm text-white/40 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
FloatingLabel.displayName = 'FloatingLabel';

type FloatingLabelInputProps = InputProps & { label?: string };

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, ...props }, ref) => {
  return (
    <div className="relative">
      <FloatingInput ref={ref} id={id} {...props} />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
    </div>
  );
});
FloatingLabelInput.displayName = 'FloatingLabelInput';

const Contacts = () => {
  const [loading, setLoading] = React.useState(false);
  const [sended, setSended] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: '',
      name: '',
      email: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    setSended(true);
  }

  return (
    <section className="pt-[40px] pb-[88px]">
      <div className="container mx-auto">
        <h1 className="h1 mb-[6px] text-[32px] font-medium leading-none md:mb-[16px] md:text-[40px] lg:mb-[48px] lg:text-[56px]">
          Оставьте заявку
        </h1>
        <div className="flex justify-between gap-[126px]">
          <div className="w-full max-w-[486px]">
            {!sended && (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full flex flex-col gap-[32px]"
                >
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder="Выберете город"
                              {...field}
                              id="city"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="moscow">Москва</SelectItem>
                              <SelectItem value="saint-petersburg">
                                Санкт-Питербург
                              </SelectItem>
                              <SelectItem value="kazan">Казань</SelectItem>
                              <SelectItem value="krasnodar">
                                Краснодар
                              </SelectItem>
                              <SelectItem value="rostov-na-dony">
                                Ростов на дону
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FloatingLabelInput {...field} id="name" label="Имя" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-[24px]">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FloatingLabelInput
                            {...field}
                            id="email"
                            label="Email"
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FloatingLabelInput
                            {...field}
                            id="phone"
                            label="Телефон"
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" variant="accent">
                    Оставить заявку
                  </Button>
                </form>
              </Form>
            )}

            {/* <form className="w-full flex items-start flex-col gap-[32px]">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Выберете город" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="saint-petersburg">
                      Санкт-Питербург
                    </SelectItem>
                    <SelectItem value="kazan">Казань</SelectItem>
                    <SelectItem value="krasnodar">Краснодар</SelectItem>
                    <SelectItem value="rostov-on-don">
                      Ростов на дону
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input placeholder="Имя" />
              <div className="flex gap-[24px] w-full">
                <Input placeholder="Email" />
                <Input placeholder="+7 (___) __-__-___" />
              </div>
              <Textarea placeholder="Оставьте пометку к заказу" />
              <Input id="picture" type="file" placeholder="Прикрепите файл" />
              <label>
                <Checkbox />
                <span>Даю согласие на обработку своих персональных данных</span>
              </label>
              <Button variant="accent" type="submit">
                Оставить заявку
              </Button>
            </form> */}
          </div>
          <ul className="flex flex-col gap-[32px] flex-1">
            <li>
              <p>Наша горячая линия</p>
              <a href="tel:+78993823112">8 800 38 23 112</a>
            </li>

            <li>
              <p>Главный офис</p>
              <address>г. Москва, Садовническая ул., 80</address>
            </li>

            <li>
              <p>Часы работы</p>
              <p>Пн-Пт с 10:00 до 22:00</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
