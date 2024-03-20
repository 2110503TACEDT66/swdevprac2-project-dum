import Image from 'next/image'
import styles from './page.module.css'
import RegisterForm from '@/components/RegisterForm'
import LoginForm from '@/components/LoginForm'

export default function Home() {
  return (
      <div>
        <RegisterForm/>
        <LoginForm/>
      </div>
  )
}
