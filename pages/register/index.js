//? required
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";

//? icons
import { HiOutlineMail } from "react-icons/hi";
import { RiLock2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

const INITIAL_VALUES = {
    username: "",
    email: "",
    password: "",
};

const VALIDATE = yup.object().shape({
    username: yup.string().required("Please Enter Your UserName"),
    email: yup.string().required("Please Enter Your Email"),
    password: yup
        .string()
        .required("Please Enter Your Password")
        .min(6, "Must Be At Least 8 Characters"),
});

//? framer
const vars = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1,
            ease: "easeOut",
        },
    },
};

//? component
export default function Register() {
    const [userNameIs, setUserNameIs] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const SUBMIT = (values) => {
        setUserNameIs(values.username);
        setEmail(values.email);
        setPassword(values.password);
    };

    return (
        <>
            <Head>
                <title>
                    Register || and get access to easily buy any coffee that you want
                </title>
            </Head>
            <header className="flex min-h-screen w-full flex-col items-center justify-start bg-hero px-4">
                <div className="w-full max-w-md">
                    <ul className="grid grid-cols-[1fr_1.5fr_1fr] items-center justify-items-center py-8 px-2 font-sans italic text-white">
                        <li className="justify-self-start">
                            <h6 className="text-xl not-italic underline">
                                Register
                            </h6>
                        </li>
                        <li>
                            <Link href="/login">
                                <a className="text-sm opacity-70">
                                    already have account?
                                </a>
                            </Link>
                        </li>
                        <li className="justify-self-end">
                            <Link href="/login">
                                <a className="text-xl opacity-70">Login</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                {!userNameIs && (
                    <Formik
                        initialValues={INITIAL_VALUES}
                        validationSchema={VALIDATE}
                        onSubmit={SUBMIT}
                        validateOnMount
                    >
                        {(formik) => {
                            return (
                                <motion.div
                                    variants={vars}
                                    initial="hidden"
                                    animate="animate"
                                >
                                    <Form className="flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-white px-4 pt-3 pb-4 shadow-2xl shadow-black">
                                        <div className="flex w-full flex-col items-start justify-center gap-y-2">
                                            <label
                                                htmlFor="username"
                                                className="text-xl font-bold text-zinc-700"
                                            >
                                                Username
                                            </label>
                                            <div className="grid w-full grid-cols-[10%_90%] items-center justify-items-center rounded-lg bg-zinc-100 py-1.5">
                                                <AiOutlineUser className="text-xl text-zinc-400" />
                                                <Field
                                                    name="username"
                                                    id="username"
                                                    placeholder="we call you by this name"
                                                    className="w-full bg-transparent pr-2 text-center text-lg outline-none"
                                                />
                                            </div>
                                            <p className="self-center font-bold text-red-500">
                                                <ErrorMessage name="username" />
                                            </p>
                                        </div>
                                        <div className="mt-8 flex w-full flex-col items-start justify-center gap-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-xl font-bold text-zinc-700"
                                            >
                                                Email
                                            </label>
                                            <div className="grid w-full grid-cols-[10%_90%] items-center justify-items-center rounded-lg bg-zinc-100 py-1.5">
                                                <HiOutlineMail className="text-xl text-zinc-400" />
                                                <Field
                                                    name="email"
                                                    id="email"
                                                    placeholder="me@example.com"
                                                    className="w-full bg-transparent pr-2 text-center text-lg outline-none"
                                                />
                                            </div>
                                            <p className="self-center font-bold text-red-500">
                                                <ErrorMessage name="email" />
                                            </p>
                                        </div>
                                        <div className="mt-8 flex w-full flex-col items-start justify-center gap-y-2">
                                            <label
                                                htmlFor="password"
                                                className="text-xl font-bold text-zinc-700"
                                            >
                                                Password
                                            </label>
                                            <div className="grid w-full grid-cols-[10%_90%] items-center justify-items-center rounded-lg bg-zinc-100 py-1.5">
                                                <RiLock2Line className="text-xl text-zinc-400" />
                                                <Field
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="over 8 characters"
                                                    className="w-full bg-transparent pr-2 text-center text-lg outline-none"
                                                />
                                            </div>
                                            <p className="self-center font-bold text-red-500">
                                                <ErrorMessage name="password" />
                                            </p>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={
                                                !formik.isValid ||
                                                formik.isSubmitting
                                            }
                                            className="buttonBG mt-6 px-4 text-lg font-bold text-zinc-600"
                                        >
                                            Register
                                        </button>
                                    </Form>
                                </motion.div>
                            );
                        }}
                    </Formik>
                )}
                {userNameIs && (
                    <div className="flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-white px-4 pt-3 pb-4 shadow-2xl shadow-black">
                        <div className="flex w-full flex-col items-start justify-center gap-y-2">
                            <h1 className="text-xl font-bold text-zinc-700">
                                Username
                            </h1>
                            <p className="w-full rounded-lg bg-zinc-100 py-1.5 text-center">
                                {userNameIs}
                            </p>
                        </div>
                        <div className="mt-8 flex w-full flex-col items-start justify-center gap-y-2">
                            <h1 className="text-xl font-bold text-zinc-700">
                                Email
                            </h1>
                            <p className="w-full rounded-lg bg-zinc-100 py-1.5 text-center">
                                {email}
                            </p>
                        </div>
                        <div className="mt-8 flex w-full flex-col items-start justify-center gap-y-2">
                            <h1 className="text-xl font-bold text-zinc-700">
                                Password
                            </h1>
                            <p className="w-full rounded-lg bg-zinc-100 py-1.5 text-center">
                                {password}
                            </p>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
