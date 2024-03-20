import Image from 'next/image'
import styles from './page.module.css'
import RegisterForm from '@/components/RegisterForm'

export default function Home() {
  return (
      <div>
        <RegisterForm/>
      </div>
  )
}
