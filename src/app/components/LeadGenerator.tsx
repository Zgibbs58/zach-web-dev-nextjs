"use client";

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ContactModal from "./ui/Modal";
import Image from "next/image";
import AnimatedHeader from "./AnimatedHeader";

export default function LeadGenerator() {
  //   const { executeRecaptcha } = useGoogleReCaptcha();
  const [modalName, setModalName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const initialValues = {
    firstName: "",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const onSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    // if (!executeRecaptcha) {
    //   console.log("not available to execute recaptcha");
    //   return;
    // }

    // const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

    // const response = await fetch("/api/recaptchaSubmit", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     gRecaptchaToken,
    //   }),
    // });
    // const responseData = await response.json();

    // if (responseData?.success === true) {
    //   console.log(`Success with score: ${responseData?.score}`);
    // } else {
    //   console.log(`Failure with score: ${responseData?.score}`);
    // }

    const subject = "Email Lead Generator";

    try {
      const response = await fetch("/api/contact", {
        // const response = await fetch("https://zach-web-dev-nextjs.vercel.app/", {
        //   const response = await fetch("https://zacharywgibbs.com/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, subject }),
      });
      if (response.status === 200) {
        console.log("Email sent!.");
        // console.log("Email sent!. \nResponse:", response);

        setModalName(values.firstName);

        resetForm();
        openModal();
      } else {
        console.log("Email not sent. \nResponse:", response);
      }
    } catch (error) {
      alert(`Error sending email: ${error}`);
      console.error("Error sending email:", error);
    }

    setSubmitting(false);
  };

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={closeModal}>
        <i className="text-6xl px-3 py-1 rounded-full bg-base-300 absolute top-[-28px] left-1/2 transform -translate-x-1/2 text-emerald-500">
          &#x2714;
        </i>
        <p className="text-2xl sm:text-3xl font-bold">Thanks, {modalName}!</p>
        <p className="sm:text-lg px-4">You will receive an email with your PDF soon.</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="3146.416645260724"
          height="717.4415617775495"
          viewBox="0 0 3146.416645260724 717.4415617775495"
          className={`logoColor w-72 h-16`}
        >
          <g transform="scale(7.320832263036219) translate(10, 10)">
            <g id="SvgjsG16844" transform="matrix(1,0,0,1,0,0)" fill="#11b27d">
              <rect xmlns="http://www.w3.org/2000/svg" width="99" height="78" rx="10" ry="10"></rect>
            </g>
            <g id="SvgjsG16845" transform="matrix(0.9004566310986011,0,0,0.9004566310986011,17.839008336686117,3.791687896050071)">
              <path d="M3.3652 46.641999999999996 c-1.2863 -1.2863 -1.2864 -3.3723 -0.00046875 -4.6583 l17.395 -17.394 l-15.065 0 c-1.8191 0 -3.2941 -1.4749 -3.2941 -3.2941 s1.4749 -3.2941 3.2941 -3.2941 l23.018 0 c1.3325 0 2.5332 0.8025 3.0434 2.0333 s0.22852 2.6476 -0.71364 3.5897 l-23.018 23.018 c-0.6432 0.6432 -1.4864 0.96474 -2.3293 0.96474 c-0.8433 0 -1.6861 -0.32156 -2.3293 -0.96474 z M28.712 53.4126 c1.8191 0 3.2945 1.4749 3.2945 3.294 s-1.4749 3.2941 -3.2941 3.2941 l-23.018 0 c-1.3325 0 -2.5332 -0.8025 -3.0434 -2.0333 s-0.22852 -2.6476 0.71364 -3.5897 l23.018 -23.018 c1.2872 -1.2868 3.3724 -1.2863 4.6587 0 s1.2863 3.3719 0 4.6583 l-17.395 17.394 l15.065 0 z M64.862 41.018 c1.8196 0 3.294 1.4749 3.294 3.2941 c0 8.6502 -7.038 15.688 -15.688 15.688 s-15.688 -7.038 -15.688 -15.688 l0 -10.624 c0 -8.6502 7.038 -15.688 15.688 -15.688 s15.688 7.038 15.688 15.688 c0 1.8191 -1.4749 3.2941 -3.2941 3.2941 s-3.2941 -1.4749 -3.2941 -3.2941 c0 -5.0177 -4.0822 -9.1002 -9.1002 -9.1002 s-9.1002 4.0822 -9.1002 9.1002 l0 10.624 c0 5.0177 4.0822 9.1002 9.1002 9.1002 c3.8566 0 7.1604 -2.4113 8.4834 -5.8059 l-8.4832 0 c-1.8191 0 -3.2941 -1.4749 -3.2941 -3.2941 s1.4749 -3.2941 3.2941 -3.2941 l12.394 0 z"></path>
            </g>
            <g id="SvgjsG16846" transform="matrix(1.4116405845389304,0,0,1.4116405845389304,115.32973461482332,-15.028914433387005)" fill="#11b27d">
              <path d="M3 14.399999999999999 l0.4 -0.4 l16.76 0 l0.4 0.4 l0 2.24 l-0.08 0.24 l-12 17.96 l1 1.84 l11.08 0 l0.4 0.4 l0 2.52 l-0.4 0.4 l-17.56 0 l-0.4 -0.4 l0 -2.08 l0.2 -0.48 l12 -17.88 l-1 -1.84 l-10.4 0 l-0.4 -0.4 l0 -2.52 z M33.626 14.120000000000001 l0.4 -0.24 l3.76 0 l0.36 0.28 l9.52 25.32 l-0.36 0.52 l-3.28 0 l-0.36 -0.28 l-1.88 -5.4 l-1.12 -0.8 l-9.8 0 l-1.12 0.8 l-1.92 5.4 l-0.36 0.28 l-3.24 0 l-0.4 -0.56 z M34.666 20.44 l-2.92 8.2 l1.12 1.6 l5.8 0 l1.12 -1.6 l-2.84 -8.2 l-2.28 0 z M70.412 17.04 l-1.88 2.16 l-0.56 0.04 c-1.76 -1.56 -3.76 -2.4 -6.12 -2.4 c-4.88 0 -8.16 4.08 -8.16 10.16 c0 5.84 3.08 10.16 8.2 10.16 c2.48 0 4.72 -0.96 6.68 -2.84 l0.56 0.04 l1.8 2.04 l-0.04 0.56 c-2.48 2.4 -5.48 3.56 -9.2 3.56 c-7.12 0 -11.76 -5.48 -11.76 -13.52 c0 -7.52 4.88 -13.52 12.16 -13.52 c3.28 0 5.96 0.96 8.28 3 z M76.238 14 l2.96 0 l0.4 0.4 l0 9.68 l1.2 1.2 l9.8 0 l1.2 -1.2 l0 -9.68 l0.4 -0.4 l2.96 0 l0.4 0.4 l0 25.2 l-0.4 0.4 l-2.96 0 l-0.4 -0.4 l0 -9.76 l-1.2 -1.2 l-9.8 0 l-1.2 1.2 l0 9.76 l-0.4 0.4 l-2.96 0 l-0.4 -0.4 l0 -25.2 z M120.41 25.880000000000003 l8.24 0 l0.4 0.4 l0 10.76 l-0.16 0.32 c-2.48 2.08 -5.76 3.16 -9.48 3.16 c-7.32 0 -12.04 -5.44 -12.04 -13.52 c0 -7.32 4.8 -13.52 12.4 -13.52 c3.36 0 6.32 1.04 8.56 3 l0.04 0.56 l-1.88 2.16 l-0.56 0.04 c-1.8 -1.56 -4 -2.4 -6.36 -2.4 c-5.08 0 -8.44 4.2 -8.44 10.16 c0 6.2 3.36 10.2 8.56 10.2 c2 0 3.76 -0.48 5.24 -1.36 l0.56 -1.04 l0 -4.52 l-1.16 -1.2 l-3.92 -0.12 l-0.4 -0.4 l0 -2.28 z M133.71599999999998 14.399999999999999 l0.4 -0.4 l2.96 0 l0.4 0.4 l0 25.2 l-0.4 0.4 l-2.96 0 l-0.4 -0.4 l0 -25.2 z M143.14199999999997 14.399999999999999 l0.4 -0.4 l8.76 0 c5.32 0 8.6 2.72 8.6 6.88 c0 1.6 -0.52 3.04 -1.64 4.24 l0 1.84 c2 1.28 2.88 3.08 2.88 5.56 c0 4.52 -3.44 7.48 -9.16 7.48 l-9.44 0 l-0.4 -0.4 l0 -25.2 z M146.902 29.48 l0 6.08 l1.2 1.2 l4.96 0 c3.48 0 5.32 -1.52 5.32 -4.24 c0 -2.76 -1.76 -4.24 -5.32 -4.24 l-4.96 0 z M146.902 18.44 l0 5.44 l1.2 1.2 l4.48 0 c2.84 0 4.6 -1.44 4.6 -4 c0 -2.52 -1.68 -3.84 -5 -3.84 l-4.08 0 z M166.80799999999996 14.399999999999999 l0.4 -0.4 l8.76 0 c5.32 0 8.6 2.72 8.6 6.88 c0 1.6 -0.52 3.04 -1.64 4.24 l0 1.84 c2 1.28 2.88 3.08 2.88 5.56 c0 4.52 -3.44 7.48 -9.16 7.48 l-9.44 0 l-0.4 -0.4 l0 -25.2 z M170.56799999999998 29.48 l0 6.08 l1.2 1.2 l4.96 0 c3.48 0 5.32 -1.52 5.32 -4.24 c0 -2.76 -1.76 -4.24 -5.32 -4.24 l-4.96 0 z M170.56799999999998 18.44 l0 5.44 l1.2 1.2 l4.48 0 c2.84 0 4.6 -1.44 4.6 -4 c0 -2.52 -1.68 -3.84 -5 -3.84 l-4.08 0 z M207.63399999999996 16.64 l-1.6 2.28 l-0.56 0.12 c-1.96 -1.48 -4.28 -2.28 -6.68 -2.28 c-3.6 0 -5.28 1.48 -5.28 3.96 c0 2.72 1.72 3.8 5.68 4.2 c6 0.6 9.4 3.32 9.4 7.68 c0 4.8 -4.04 7.92 -10.04 7.92 c-3.8 0 -6.72 -0.88 -9.36 -2.8 l-0.12 -0.56 l1.56 -2.36 l0.56 -0.12 c2.4 1.72 4.84 2.56 7.48 2.56 c3.88 0 6.24 -1.68 6.24 -4.56 c0 -2.64 -2 -3.92 -6.28 -4.32 c-5.76 -0.52 -8.8 -2.92 -8.8 -7.4 c0 -4.6 3.6 -7.48 9.04 -7.48 c3.32 0 6.4 0.92 8.68 2.64 z"></path>
            </g>
            <g id="SvgjsG16847" transform="matrix(0.8368428240366833,0,0,0.8368428240366833,117.56063031871464,40.71935911506175)" fill="#11b27d">
              <path d="M1.72 14.52 l0.4 -0.52 l3.36 0 l0.4 0.32 l3.96 17.04 l2.32 0 l4.08 -15.4 l0.4 -0.28 l2.6 0 l0.4 0.32 l4.04 15.36 l2.32 0 l4 -17.04 l0.4 -0.32 l3.24 0 l0.4 0.52 l-6.84 25.28 l-0.4 0.28 l-4 0 l-0.4 -0.28 l-3.36 -13.04 l-2.32 0 l-3.24 13 l-0.4 0.32 l-4.16 0 l-0.4 -0.28 z M37.826 14.399999999999999 l0.4 -0.4 l15.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-11.4 0 l-1.2 1.2 l0 5.36 l1.2 1.2 l9.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-9.96 0 l-1.2 1.2 l0 6 l1.2 1.2 l12.12 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-16.68 0 l-0.4 -0.4 l0 -25.2 z M59.972 14.399999999999999 l0.4 -0.4 l8.76 0 c5.32 0 8.6 2.72 8.6 6.88 c0 1.6 -0.52 3.04 -1.64 4.24 l0 1.84 c2 1.28 2.88 3.08 2.88 5.56 c0 4.52 -3.44 7.48 -9.16 7.48 l-9.44 0 l-0.4 -0.4 l0 -25.2 z M63.732 29.48 l0 6.08 l1.2 1.2 l4.96 0 c3.48 0 5.32 -1.52 5.32 -4.24 c0 -2.76 -1.76 -4.24 -5.32 -4.24 l-4.96 0 z M63.732 18.44 l0 5.44 l1.2 1.2 l4.48 0 c2.84 0 4.6 -1.44 4.6 -4 c0 -2.52 -1.68 -3.84 -5 -3.84 l-4.08 0 z M91.38399999999999 14.399999999999999 l0.4 -0.4 l7.8 0 c7.56 0 12.28 4.96 12.28 13 c0 7.8 -4.92 13 -12.44 13 l-7.64 0 l-0.4 -0.4 l0 -25.2 z M95.14399999999999 18.56 l0 16.84 l1.2 1.2 l3.08 0 c5.44 0 8.68 -3.64 8.68 -9.6 c0 -6.36 -2.88 -9.64 -8.72 -9.64 l-3.04 0 z M116.33 14.399999999999999 l0.4 -0.4 l15.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-11.4 0 l-1.2 1.2 l0 5.36 l1.2 1.2 l9.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-9.96 0 l-1.2 1.2 l0 6 l1.2 1.2 l12.12 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-16.68 0 l-0.4 -0.4 l0 -25.2 z M136.236 14.52 l0.36 -0.52 l3.44 0 l0.36 0.28 l6.04 18.84 l2.32 0 l6.08 -18.84 l0.36 -0.28 l3.4 0 l0.36 0.52 l-8.96 25.28 l-0.36 0.28 l-4.2 0 l-0.36 -0.28 z M162.822 14.399999999999999 l0.4 -0.4 l15.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-11.4 0 l-1.2 1.2 l0 5.36 l1.2 1.2 l9.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-9.96 0 l-1.2 1.2 l0 6 l1.2 1.2 l12.12 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-16.68 0 l-0.4 -0.4 l0 -25.2 z M184.968 14.399999999999999 l0.4 -0.4 l2.96 0 l0.4 0.4 l0 21.04 l1.2 1.2 l11.28 0 l0.4 0.4 l0 2.56 l-0.4 0.4 l-15.84 0 l-0.4 -0.4 l0 -25.2 z M215.23399999999998 13.48 c7.04 0 11.76 5.72 11.76 13.52 c0 7.72 -4.96 13.52 -11.76 13.52 c-7.04 0 -11.76 -5.72 -11.76 -13.52 c0 -7.72 4.96 -13.52 11.76 -13.52 z M215.23399999999998 16.76 c-4.96 0 -8 4.24 -8 10.24 c0 5.96 3.04 10.24 8 10.24 s8 -4.24 8 -10.24 c0 -5.96 -3.04 -10.24 -8 -10.24 z M231.45999999999998 14.399999999999999 l0.4 -0.4 l8.8 0 c5.72 0 9.56 3.4 9.56 8.8 c0 5.36 -4.08 8.8 -10 8.8 l-3.8 0 l-1.2 1.2 l0 6.8 l-0.4 0.4 l-2.96 0 l-0.4 -0.4 l0 -25.2 z M235.22 18.52 l0 8.56 l1.2 1.2 l3.76 0 c4.08 0 6.28 -1.92 6.28 -5.48 c0 -3.68 -2.04 -5.48 -6.04 -5.48 l-4 0 z M254.28599999999997 14.399999999999999 l0.4 -0.4 l3.64 0 l0.36 0.2 l6.32 11.28 l2.08 0 l6.36 -11.28 l0.36 -0.2 l3.56 0 l0.4 0.4 l0 25.2 l-0.4 0.4 l-2.84 0 l-0.4 -0.4 l0 -15.56 l-2.24 -0.6 l-4.92 8.56 l-0.36 0.2 l-1.36 0 l-0.36 -0.2 l-4.76 -8.48 l-2.24 0.6 l0 15.48 l-0.4 0.4 l-2.8 0 l-0.4 -0.4 l0 -25.2 z M283.432 14.399999999999999 l0.4 -0.4 l15.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-11.4 0 l-1.2 1.2 l0 5.36 l1.2 1.2 l9.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-9.96 0 l-1.2 1.2 l0 6 l1.2 1.2 l12.12 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-16.68 0 l-0.4 -0.4 l0 -25.2 z M305.57800000000003 14.399999999999999 l0.4 -0.4 l2.76 0 l0.32 0.2 l10.92 16.52 l2.2 -0.68 l0 -15.64 l0.4 -0.4 l2.8 0 l0.4 0.4 l0 25.2 l-0.4 0.4 l-3.12 0 l-0.32 -0.16 l-10.56 -16.04 l-2.2 0.64 l0 15.16 l-0.4 0.4 l-2.8 0 l-0.4 -0.4 l0 -25.2 z M329.444 14.399999999999999 l0.4 -0.4 l18.96 0 l0.4 0.4 l0 2.56 l-0.4 0.4 l-6.4 0 l-1.2 1.2 l0 21.04 l-0.4 0.4 l-2.96 0 l-0.4 -0.4 l0 -21.04 l-1.2 -1.2 l-6.4 0 l-0.4 -0.4 l0 -2.56 z"></path>
            </g>
          </g>
        </svg>
      </ContactModal>
      <div className="mx-8 mt-6 mb-24 sm:mx-20 lg:mx-32 flex flex-wrap xl:flex-nowrap gap-x-24">
        <div className="xl:w-1/2 space-y-6">
          <AnimatedHeader xVal={-50} tailwindClasses="text-4xl font-bold text-left" text="Unlock Your Website's Potential" />{" "}
          <p>
            Want to know the secrets to a thriving online presence? Enter your name and email below and get access to a free PDF: 5 Essentials for a
            Successful Business Website.
          </p>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(formik) => (
              <Form className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col">
                  <label htmlFor="firstName">Name</label>
                  <Field
                    className="border border-lightText p-2 w-full sm:w-auto dark:text-lightText"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    autoComplete="given-name"
                  />
                  <ErrorMessage name="firstName" render={(msg) => <div className="text-red-500">{msg}</div>} />
                </div>
                <div className="flex flex-col col-span-1">
                  <label htmlFor="email">Email</label>
                  <Field
                    className="border border-lightText w-full p-2 sm:w-auto dark:text-lightText"
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="user@gmail.com"
                  />
                  <ErrorMessage name="email" render={(msg) => <div className="text-red-500">{msg}</div>} />
                </div>
                <div className="flex justify-start">
                  <button
                    className="text-white text-lg font-semibold bg-emerald-500 hover:bg-emerald-700 ease-in-out duration-300 rounded-lg py-2 px-6 col-span-2"
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <Image
          className="xl:w-1/2 object-contain mt-6 xl:mt-0"
          src="/images/5-must-have-titlepage.jpg"
          alt="Free PDF download title page"
          width={500}
          height={500}
        />
      </div>
    </>
  );
}
