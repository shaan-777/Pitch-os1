import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from 'react'
import dashboard from  '../assets/dashboard.jpg'
import dark from '../assets/dark.png'
const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}


export function HeroSection() {
    const navigate = useNavigate();
    const [titleNumber, setTitleNumber] = useState(0);
const titles = useMemo(
    () => ["vision", "showcase", "effortlessly", "get funded", "grow"],
    []
);

useEffect(() => {
    const timeoutId = setTimeout(() => {
        if (titleNumber === titles.length - 1) {
            setTitleNumber(0);
        } else {
            setTitleNumber(titleNumber + 1);
        }
    }, 2000);
    return () => clearTimeout(timeoutId);
}, [titleNumber, titles]);

    return (
        <>
            
            <main className="overflow-hidden bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50" style={{backgroundColor: '#F5F2E8'}}>
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div
                        className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(276,50%,70%,.08)_0,hsla(276,50%,60%,.02)_50%,hsla(276,50%,50%,0)_80%)]" />
                    <div
                        className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(276,50%,70%,.06)_0,hsla(276,50%,60%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div
                        className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(276,50%,70%,.04)_0,hsla(276,50%,60%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                        </AnimatedGroup>
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,#F5F2E8_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-purple-100 hover:border-yellow-500/80 hover:shadow-yellow-500/20 bg-white/80 group mx-auto flex w-fit items-center gap-4 rounded-full border border-purple-200 p-1 pl-4 shadow-md shadow-purple-200/50 transition-all duration-300 backdrop-blur-sm">
                                        <span className="text-gray-700 text-sm">Try out PitchMaster now!</span>
                                        <span
                                            className="block h-4 w-0.5 border-l border-purple-300 bg-purple-300"></span>

                                        <div
                                            className="bg-purple-200 group-hover:bg-yellow-400 group-hover:border-yellow-500 border border-purple-300 size-6 overflow-hidden rounded-full duration-500 transition-all">
                                            <div
                                                className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-purple-600 group-hover:text-white transition-colors" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-purple-600 group-hover:text-white transition-colors" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                   <div className="mx-auto mt-8 max-w-2xl text-balance text-lg">

                                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">

                                        <span className="text-gray-700">Craft Pitches That Win Investors</span>

                                        <span className="relative flex w-full justify-center overflow-hidden text-center h-16 md:h-24 pb-6 md:pb-6 pt-2 md:pt-2">

                                            &nbsp;

                                            {titles.map((title, index) => (

                                                <motion.span

                                                    key={index}

                                                    className="absolute font-semibold text-purple-600 hover:text-purple-700 transition-colors"

                                                    initial={{ opacity: 0, y: "-50" }}

                                                    transition={{ type: "spring", stiffness: 50 }}

                                                    animate={

                                                        titleNumber === index

                                                            ? {

                                                                y: 0,

                                                                opacity: 1,

                                                            }

                                                            : {

                                                                y: titleNumber > index ? -100 : 100,

                                                                opacity: 0,

                                                            }

                                                    }

                                                >

                                                    {title}

                                                </motion.span>

                                            ))}

                                        </span>

                                    </h1>
                                    </div>

                                    <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-gray-600">
                                 Transform your ideas into compelling pitches in minutes with our powerful AI-driven platform. Take charge of your journey from concept to funding and bring your vision to life with confidence!
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div key={1} className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 hover:from-yellow-400/30 hover:to-yellow-500/30 rounded-[14px] border border-yellow-500/50 hover:border-yellow-400 p-0.5 transition-all duration-300">
                                        <Button
                                            size="lg"
                                            className="rounded-xl px-5 text-base bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-800 font-semibold transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                                            onClick={() => {
                                                const user = auth.currentUser;
                                                if (user) {
                                                    navigate('/dashboard');
                                                } else {
                                                    navigate('/login');
                                                }
                                            }}
                                        >
                                            <span className="text-nowrap">Start Now</span>
                                        </Button>
                                    </div>
                                    {/* <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button> */}
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div
                                className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b from-transparent from-35% to-stone-100 absolute inset-0 z-10" />
                                <div
                                    className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-purple-200 hover:border-yellow-500/50 p-4 shadow-lg shadow-purple-200/30 ring-1 ring-purple-100 hover:ring-yellow-500/30 transition-all duration-500 bg-white/50 backdrop-blur-sm hover:shadow-yellow-500/10">
                                    <img
                                        className="aspect-15/8 relative hidden rounded-2xl dark:block transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
                                        src= {dark}
                                        alt="app screen"
                                        width="2700"
                                        height="1440" />
                                    <img
                                        className="z-2 aspect-15/8 relative rounded-2xl border border-purple-200 hover:border-yellow-500/30 dark:hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
                                        src= {dashboard}
                                        alt="app screen"
                                        width="2700"
                                        height="1440" />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    );
}

