import React from 'react'
import Link from 'next/link';

const page = () => {
    return (
        <div className="rounded-lg shadow dark:border flex min-h-full flex-col justify-center px-6 m-5 lg:mx-96 mt-6 py-5 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Reset Password</h2>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                        <div className="mt-2">
                            <input id="mobile" name="mobile" type="mobile" autocomplete="mobile" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continue</button>
                    </div>
                </form>

                <p className="mt-5 text-center text-sm text-gray-500">
                    Remember Password?
                    <Link href={"/login"} className="font-semibold leading-6 text-indigo-600 hover:text-pink-500"> Log in</Link>
                </p>
            </div>
        </div>
    )
}

export default page;
