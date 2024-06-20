import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8  border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5 ">
                    <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-800 via-blue-500 to-pink-400 rounded-lg text-white">Matheesha's</span>
                            Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 mt-4 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='' target='_blank' rel='noopener noreferer'>
                                Projects
                            </Footer.Link>
                        </Footer.LinkGroup>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferer'>
                                Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow US'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='' target='_blank' rel='noopener noreferer'>
                                Github
                            </Footer.Link>
                        </Footer.LinkGroup>
                        <Footer.LinkGroup col>
                            <Footer.Link href='' target='_blank' rel='noopener noreferer'>
                                LinkedIn
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#'>
                                Privacy Policy
                            </Footer.Link>
                        </Footer.LinkGroup>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#'>
                               Terms & Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Matheesha's Blog" year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook} className='text-blue-500'/>
                    <Footer.Icon href='#' icon={BsInstagram} className='text-red-800'/>
                    <Footer.Icon href='#' icon={BsTwitterX} className='text-black-500'/>
                    <Footer.Icon href='#' icon={BsGithub} className='text-blue-950'/>
                </div>
            </div>

        </div>
    </Footer>
  )
}
