"use client";

import React, { useState } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "@/app/globals.css";

import { useTransition } from "react"; // For pending
import { RegisterSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";
import { useSession } from "next-auth/react";

export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  // Type of our error & success can be string | undefined
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [showFormField, setShowFormField] = useState(false);
  const [tokenValue, setTokenValue] = useState('test');
  /* const [session, loading] = useSession();

  useEffect(() => {
    // If session exists, set the token value
    if (session) {
      setTokenValue(session.remember_token); // Assuming session object has remember_token property
    }
  }, [session]); */

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    // axios.post("/api/route", values).then ...

    setError("");
    setSuccess("");

    startTransition(() => {
      // Pass informations from Client To the Server
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Créez votre compte gratuit"
      backButtonLabel="Se connecter"
      backButtonHref="/auth/login"
      backButtonText="Vous avez déjà un compte?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {/* First Name */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending} // Disabled while is pending
                        placeholder="Alaoui"
                        type="name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Last Name */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending} // Disabled while is pending
                        placeholder="Ahmed"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* UserName */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending} // Disabled while is pending
                        placeholder="Ahmed123"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {showFormField && (
              <FormField
                control={form.control}
                name="remember_token"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending} // Disabled while is pending
                        placeholder="john doe"
                        type="text"
                        value="tokenValue" // Set value from session
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending} // Disabled while is pending
                        placeholder="ex: 620704034"
                        type="tel"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending} // Disabled while is pending
                        placeholder="john.doe@exemple.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending} // Disabled while is pending
                        placeholder="******"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending} // Disabled while is pending
            type="submit"
            className="w-full"
            variant="costum"
          >
            S&apos;inscrire
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
