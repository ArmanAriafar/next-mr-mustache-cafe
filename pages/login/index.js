//? required
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

//? icons
import { HiOutlineMail } from "react-icons/hi";
import { RiLock2Line } from "react-icons/ri";

const INITIAL_VALUES = {
    email: "",
    password: "",
};

const VALIDATE = yup.object().shape({
    email: yup.string().required("Please Enter Your Email"),
    password: yup
        .string()
        .required("Please Enter Your Password")
        .min(6, "Must Be At Least 8 Characters"),
});

const INITIAL_EMAIL = {
    forgottenEmail: "",
};

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
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isShown, setIsShown] = useState(false);
    const modal = {
        hidden: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1,
            },
        },
    };
    const modalHandler = (values) => {
        toast.custom((t) => (
            <div
                className={`${
                    t.visible ? "slide-fwd-center" : "slide-bck-center"
                } w-full max-w-md rounded bg-white py-4 text-center text-xl text-black`}
            >
                <p>Code has been sent to {values.forgottenEmail}!</p>
            </div>
        ));
        setIsShown(false);
    };

    const SUBMIT = (values) => {
        setEmail(values.email);
        setPassword(values.password);
    };
    return (
        <>
            <Head>
                <title>Login || if you have account, already</title>
            </Head>
            <header className="flex min-h-screen w-full flex-col items-center justify-start bg-hero px-4">
                {isShown && (
                    <>
                        <motion.div
                            variants={modal}
                            initial="hidden"
                            animate="animate"
                            className="
                            fixed top-0 left-0 z-[100] h-screen w-screen 
                            bg-black bg-opacity-80 px-2 backdrop-blur-md"
                            onClick={() => setIsShown(false)}
                        />
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: { type: "tween", duration: 1 },
                                },
                            }}
                            initial="hidden"
                            animate="animate"
                            className="
                            fixed !top-1/3 z-[200] flex w-[95%] max-w-md flex-col items-start 
                            justify-center gap-y-4 rounded-lg bg-white px-2 pt-4 pb-2"
                        >
                            <label
                                htmlFor="forgottenEmail"
                                className="text-xl font-bold text-black"
                            >
                                Last Email You Remember
                            </label>
                            <Formik
                                initialValues={INITIAL_EMAIL}
                                onSubmit={modalHandler}
                            >
                                <Form className="w-full">
                                    <Field
                                        type="email"
                                        name="forgottenEmail"
                                        id="forgottenEmail"
                                        placeholder="me@example.com"
                                        className="w-full rounded-md bg-zinc-100 py-1.5 text-center text-lg outline-none"
                                        autoComplete="off"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full py-1.5 text-lg font-bold underline"
                                    >
                                        Recovery
                                    </button>
                                </Form>
                            </Formik>
                        </motion.div>
                    </>
                )}
                <div className="w-full max-w-md">
                    <ul className="grid grid-cols-[1fr_1.5fr_1fr] items-center justify-items-center py-8 px-2 font-sans italic text-white">
                        <li className="justify-self-start">
                            <Link href="/register">
                                <a className="text-xl opacity-70">Register</a>
                            </Link>
                        </li>
                        <li>
                            <h6 className="text-sm opacity-70">
                                already have account?
                            </h6>
                        </li>
                        <li className="justify-self-end">
                            <h6 className="text-xl not-italic underline">Login</h6>
                        </li>
                    </ul>
                </div>
                {!email && (
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
                                                htmlFor="email"
                                                className="text-xl font-bold text-zinc-700"
                                            >
                                                Email
                                            </label>
                                            <div className="grid w-full grid-cols-[10%_90%] items-center justify-items-center rounded-lg bg-zinc-100 py-1.5">
                                                <HiOutlineMail className="text-xl text-zinc-400" />
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="me@example.com"
                                                    className="w-full bg-transparent text-center text-lg outline-none"
                                                    autoComplete="off"
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
                                                    type="text"
                                                    name="password"
                                                    id="password"
                                                    placeholder="over 8 characters"
                                                    className="w-full bg-transparent text-center text-lg outline-none"
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <p className="self-center font-bold text-red-500">
                                                <ErrorMessage name="password" />
                                            </p>
                                        </div>
                                        <p className="mt-2 text-lg font-normal text-zinc-500/80">
                                            or
                                        </p>
                                        <button
                                            onClick={() => setIsShown(true)}
                                            className="mt-2 text-base italic text-zinc-500 underline"
                                        >
                                            Forgot My Password
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={
                                                !formik.isValid ||
                                                formik.isSubmitting
                                            }
                                            className="buttonBG mt-6 px-4 text-lg font-bold text-zinc-600"
                                        >
                                            Login
                                        </button>
                                    </Form>
                                </motion.div>
                            );
                        }}
                    </Formik>
                )}

                {email && (
                    <div className="flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-white px-4 pt-3 pb-4 shadow-2xl shadow-black">
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
