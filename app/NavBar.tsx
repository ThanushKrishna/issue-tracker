'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';
import classnames from 'classnames'
import { useSession } from "next-auth/react";
import { Avatar, Box , DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { Skeleton } from '@/app/components'

const NavBar = () => {   
      

  return (
    <nav className="border-b mb-5 px-5 py-3">    
      <Flex justify="between">
        <Flex align="center" gap="3">
          <Link href="/">
            <AiFillBug />
            </Link>
        <NavLinks />
        </Flex>
        <AuthStatus />
      </Flex>      
    </nav>
  )
}

const NavLinks = () => {
    const currentPath = usePathname()
    
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues/list' },
      ]
    return(
    <ul className='flex space-x-6'>
            {links.map(link => 
            <li key={link.label}>
                <Link 
                key={link.href} 
                className={classnames({
                    "nav-link": true,
                    '!text-zinc-900': currentPath === link.href,                                        
                })} 
                href={link.href}>{link.label}</Link>
            </li>)}
        </ul>
    )
}

const AuthStatus = () => {
    const { status, data: session } = useSession();

    if (status === "loading") return <Skeleton width={80} height={30} />;

    if (status === "unauthenticated")
      return <Link className="nav-link" href="/api/auth/signin">Login</Link>;
  
    return (
      <Box>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              src={session!.user!.image!}
              fallback="?"
              size="2"
              radius="full"
              className="cursor-pointer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size="2">{session!.user!.email}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href="/api/auth/signout">Log out</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Box>
    );
       
}

export default NavBar
