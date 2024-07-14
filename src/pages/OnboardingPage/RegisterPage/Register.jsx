import './Register.scss'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { createAccountWithCredentials, signInWithGoogle } from '../../../utils/firebase'
import { useSettingProfileStore } from '../../../hooks/use-auth-store'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'

const Register = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const setProfile = useSettingProfileStore((state) => state.setProfile)
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onSubmit'
  })
  const password = watch('password')

  const googleRegisterMutation = useMutation({
    mutationFn: (token) => {
      return axios.post(`https://api.lintapp.com/auth/google/register`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
    },
    onSuccess({ data }) {
      sessionStorage.setItem('session', data.sessionCookie)
      setProfile(data.userInfo)

      if (data.userInfo.profile === null) {
        navigate('/setup-profile', { replace: true });
      } else {
        navigate('/collaborate', { replace: true });
      }
    },
    onError(error) {
      toast.error(error.message)
    }
  });

  const emailAndPasswordRegisterMutation = useMutation({
    mutationFn: ({ token, data }) => {
      return axios.post(`https://api.lintapp.com/auth/register`, {
        password: data.password,
        fullName: data.fullName
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
    },
    onSuccess({ data }) {
      sessionStorage.setItem('session', data.sessionCookie)
      setProfile(data.userInfo)

      if (data.userInfo.profile === null) {
        navigate('/setup-profile', { replace: true });
      } else {
        navigate('/collaborate', { replace: true });
      }
    },
    onError(error) {
      toast.error(error.message)
    }
  });

  async function handleGoogleRegister() {
    try {
      const userCredentials = await signInWithGoogle();
      const accessToken = await userCredentials.user.getIdToken();
      await googleRegisterMutation.mutateAsync(accessToken)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleCredentialsRegister(data) {
    try {
      setIsLoading(true)
      const userCredentials = await createAccountWithCredentials(data.email, data.password)
      console.log(userCredentials)
      const accessToken = await userCredentials.user.getIdToken()
      await emailAndPasswordRegisterMutation.mutateAsync({
        token: accessToken,
        data
      })
    } catch (error) {
      console.log(error.response)
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <main id="register">
      <div className='logo'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 80 40" fill="none">
          <path d="M36.7318 11.6777H35.6797V21.5797C36.8182 19.6806 37.4146 17.5059 37.4042 15.2917C37.4056 14.0559 37.1776 12.8304 36.7318 11.6777Z" fill="#0006B1" />
          <path d="M19.7728 25.9187C20.5526 27.174 21.0517 28.5831 21.2358 30.0494V32.0074H0V3.20117H6.74864V25.9249L19.7728 25.9187Z" fill="#0006B1" />
          <path d="M56.5007 20.5281V32.0083H50.0415V20.8954C50.0415 19.5777 49.7116 18.5483 49.0517 17.8075C48.709 17.4338 48.2879 17.1404 47.8187 16.9483C47.3495 16.7562 46.8436 16.6701 46.3373 16.6962C45.7674 16.6734 45.1994 16.7759 44.6734 16.9964C44.1474 17.2169 43.6762 17.5501 43.2929 17.9725C42.4973 18.8961 42.0842 20.0885 42.138 21.3063V32.0083H35.6758V24.7211L35.9248 24.3351C37.3941 22.0503 39.0626 19.4604 39.0626 15.3079C39.0635 14.0775 38.8702 12.8547 38.4898 11.6845H41.2758L41.6867 14.0721C42.4747 13.1726 43.4501 12.4565 44.5443 11.974C45.7066 11.4693 46.9628 11.2168 48.2299 11.2332C50.7554 11.2332 52.7642 12.056 54.2563 13.7017C55.7484 15.3473 56.4965 17.6228 56.5007 20.5281Z" fill="#0006B1" />
          <path d="M55.6797 3.20117V9.08755H64.4361V32.0074H71.1847V9.08755H80.0003V3.20117H55.6797Z" fill="#0006B1" />
          <path d="M30.7178 34.1959H24.0905C23.9114 34.1959 23.7396 34.1247 23.6129 33.998C23.4862 33.8714 23.415 33.6995 23.415 33.5204C23.4146 33.4314 23.4318 33.3433 23.4656 33.2609C23.4993 33.1786 23.549 33.1038 23.6118 33.0407C23.6746 32.9777 23.7492 32.9277 23.8313 32.8935C23.9135 32.8594 24.0016 32.8418 24.0905 32.8418H30.7178C30.8069 32.8418 30.8951 32.8594 30.9775 32.8935C31.0598 32.9276 31.1346 32.9775 31.1976 33.0406C31.2606 33.1036 31.3106 33.1784 31.3447 33.2607C31.3788 33.343 31.3964 33.4313 31.3964 33.5204C31.3955 33.6998 31.3237 33.8716 31.1965 33.9982C31.0693 34.1248 30.8972 34.1959 30.7178 34.1959Z" fill="#0006B1" />
          <path d="M30.7178 36.3228H24.0905C24.0018 36.3228 23.914 36.3054 23.832 36.2714C23.7501 36.2375 23.6756 36.1877 23.6129 36.125C23.5502 36.0623 23.5004 35.9878 23.4665 35.9058C23.4325 35.8239 23.415 35.7361 23.415 35.6473C23.415 35.4679 23.4861 35.2958 23.6127 35.1686C23.7393 35.0414 23.9111 34.9696 24.0905 34.9688H30.7178C30.8975 34.9696 31.0696 35.0413 31.1967 35.1684C31.3238 35.2955 31.3955 35.4676 31.3964 35.6473C31.3955 35.8268 31.3237 35.9986 31.1965 36.1252C31.0693 36.2518 30.8972 36.3228 30.7178 36.3228Z" fill="#0006B1" />
          <path d="M25.7957 37.1211C25.7572 37.1214 25.7192 37.1301 25.6844 37.1466C25.6496 37.1631 25.6188 37.1871 25.5942 37.2167C25.5696 37.2463 25.5518 37.281 25.5419 37.3183C25.5321 37.3555 25.5306 37.3945 25.5374 37.4324C25.6031 37.8754 25.8258 38.28 26.1649 38.5725C26.5041 38.865 26.937 39.0259 27.3848 39.0259C27.8327 39.0259 28.2656 38.865 28.6047 38.5725C28.9438 38.28 29.1666 37.8754 29.2323 37.4324C29.2397 37.3944 29.2385 37.3552 29.2289 37.3177C29.2193 37.2803 29.2015 37.2454 29.1768 37.2156C29.1521 37.1858 29.1211 37.1619 29.086 37.1455C29.0509 37.1292 29.0126 37.1209 28.9739 37.1211H25.7957Z" fill="#0006B1" />
          <path d="M29.2174 5.43012C28.0682 5.21749 26.891 5.2038 25.7372 5.38965C23.382 5.7632 21.2378 6.96653 19.692 8.78236C18.1462 10.5982 17.3005 12.9069 17.3077 15.2916C17.3077 18.9616 18.7707 21.2278 20.1839 23.4254C21.482 25.4363 22.7053 27.3352 22.9295 30.3359C22.9646 30.7814 23.1659 31.1973 23.4934 31.5011C23.821 31.805 24.2508 31.9747 24.6975 31.9764H30.0174C30.4642 31.9747 30.894 31.805 31.2215 31.5011C31.549 31.1973 31.7503 30.7814 31.7855 30.3359C32.0096 27.3352 33.233 25.4363 34.5279 23.4254C35.9442 21.2278 37.4042 18.9616 37.4042 15.2916C37.4024 12.9515 36.5834 10.6855 35.0886 8.88493C33.5939 7.08441 31.5172 5.86245 29.2174 5.43012ZM32.1372 23.0737C32.1044 23.1716 32.049 23.2604 31.9754 23.3329C31.9019 23.4054 31.8123 23.4595 31.7139 23.4908C25.8368 25.3865 22.2384 21.3803 22.1014 21.206C21.9972 21.0747 21.9474 20.9083 21.9623 20.7413C21.9773 20.5743 22.0558 20.4194 22.1817 20.3087C22.3077 20.1979 22.4713 20.1398 22.6389 20.1463C22.8064 20.1529 22.9651 20.2235 23.082 20.3437C23.2127 20.49 26.2975 23.8706 31.331 22.2519C31.4125 22.2253 31.4986 22.215 31.5841 22.2217C31.6696 22.2284 31.753 22.252 31.8293 22.2911C31.9057 22.3301 31.9736 22.3839 32.0291 22.4493C32.0846 22.5147 32.1267 22.5904 32.1528 22.6721C32.1885 22.8045 32.183 22.9445 32.1372 23.0737Z" fill="#0006B1" />
          <path d="M27.1783 3.74308C27.1252 3.74433 27.0724 3.73494 27.0229 3.71548C26.9735 3.69601 26.9285 3.66686 26.8905 3.62974C26.8525 3.59261 26.8223 3.54827 26.8017 3.49931C26.7811 3.45035 26.7705 3.39776 26.7705 3.34464V1.3711C26.7705 1.26543 26.8125 1.16408 26.8872 1.08936C26.9619 1.01464 27.0633 0.972656 27.169 0.972656C27.2746 0.972656 27.376 1.01464 27.4507 1.08936C27.5254 1.16408 27.5674 1.26543 27.5674 1.3711V3.34464C27.5674 3.44872 27.5267 3.54867 27.454 3.62313C27.3813 3.69759 27.2823 3.74064 27.1783 3.74308Z" fill="#0006B1" />
          <path d="M36.3801 7.55389C36.3056 7.54826 36.2341 7.52196 36.1738 7.47794C36.1134 7.43391 36.0665 7.37392 36.0384 7.3047C36.0102 7.23548 36.0019 7.15979 36.0145 7.08612C36.027 7.01246 36.0598 6.94376 36.1093 6.88774L37.5038 5.49319C37.579 5.41847 37.6807 5.37666 37.7867 5.37695C37.8926 5.37725 37.9941 5.41962 38.0688 5.49474C38.1435 5.56987 38.1853 5.6716 38.1851 5.77756C38.1848 5.88351 38.1424 5.98501 38.0673 6.05972L36.6727 7.45116C36.6334 7.48712 36.5872 7.51476 36.5369 7.53241C36.4866 7.55007 36.4333 7.55737 36.3801 7.55389Z" fill="#0006B1" />
          <path d="M14.1667 16.7547H12.1963C12.0963 16.7459 12.0033 16.6999 11.9355 16.6258C11.8677 16.5518 11.8301 16.4551 11.8301 16.3547C11.8301 16.2543 11.8677 16.1576 11.9355 16.0835C12.0033 16.0095 12.0963 15.9635 12.1963 15.9547H14.1667C14.2222 15.9498 14.2781 15.9565 14.3309 15.9744C14.3837 15.9922 14.4321 16.0209 14.4732 16.0585C14.5143 16.0961 14.5471 16.1419 14.5696 16.1929C14.592 16.2439 14.6036 16.299 14.6036 16.3547C14.6036 16.4104 14.592 16.4655 14.5696 16.5165C14.5471 16.5675 14.5143 16.6132 14.4732 16.6508C14.4321 16.6885 14.3837 16.7171 14.3309 16.735C14.2781 16.7529 14.2222 16.7596 14.1667 16.7547Z" fill="#0006B1" />
          <path d="M17.9802 7.55383C17.8738 7.55347 17.7719 7.51093 17.6969 7.43554L16.3024 6.0441C16.2272 5.96939 16.1849 5.86789 16.1846 5.76193C16.1843 5.65598 16.2261 5.55425 16.3008 5.47912C16.3755 5.40399 16.477 5.36162 16.583 5.36133C16.6889 5.36104 16.7907 5.40285 16.8658 5.47756L18.2603 6.88768C18.315 6.94379 18.3521 7.01467 18.367 7.09158C18.3819 7.16849 18.3739 7.24808 18.3441 7.32054C18.3144 7.393 18.264 7.45517 18.1994 7.49939C18.1347 7.5436 18.0585 7.56794 17.9802 7.56939V7.55383Z" fill="#0006B1" />
          <path d="M32.2026 4.75077C32.1535 4.74541 32.106 4.73061 32.0625 4.70719C31.965 4.66594 31.8877 4.58786 31.8475 4.48992C31.8073 4.39198 31.8073 4.28211 31.8477 4.18423L32.6104 2.36633C32.6308 2.3181 32.6605 2.27436 32.6979 2.23762C32.7352 2.20087 32.7794 2.17185 32.828 2.15219C32.8766 2.13253 32.9285 2.12264 32.9809 2.12306C33.0333 2.12348 33.0851 2.13422 33.1333 2.15466C33.1816 2.1751 33.2253 2.20484 33.262 2.24218C33.2988 2.27953 33.3278 2.32374 33.3475 2.3723C33.3671 2.42086 33.377 2.47282 33.3766 2.52521C33.3762 2.57759 33.3654 2.62938 33.345 2.67762L32.5855 4.49552C32.5559 4.57244 32.5032 4.63829 32.4346 4.684C32.366 4.72972 32.285 4.75304 32.2026 4.75077Z" fill="#0006B1" />
          <path d="M15.1782 11.7271C15.1247 11.7276 15.0717 11.717 15.0226 11.6959L13.2047 10.9333C13.1562 10.9129 13.1123 10.8831 13.0754 10.8457C13.0384 10.8082 13.0092 10.7639 12.9894 10.7152C12.9696 10.6665 12.9596 10.6144 12.96 10.5618C12.9603 10.5092 12.971 10.4572 12.9915 10.4088C13.0119 10.3603 13.0417 10.3164 13.0791 10.2795C13.1165 10.2425 13.1608 10.2133 13.2095 10.1935C13.2583 10.1737 13.3104 10.1637 13.363 10.1641C13.4155 10.1644 13.4675 10.1751 13.516 10.1956L15.3339 10.9582C15.4185 10.9938 15.4883 11.0575 15.5314 11.1387C15.5745 11.2198 15.5882 11.3133 15.5702 11.4034C15.5523 11.4934 15.5038 11.5745 15.4329 11.633C15.3621 11.6914 15.2732 11.7235 15.1813 11.724L15.1782 11.7271Z" fill="#0006B1" />
          <path d="M22.2445 4.70728C22.1654 4.70729 22.0881 4.68357 22.0226 4.63917C21.9571 4.59477 21.9065 4.53175 21.8772 4.45825L21.1301 2.63413C21.0888 2.5363 21.0881 2.42608 21.1281 2.32771C21.1681 2.22935 21.2455 2.1509 21.3434 2.10962C21.4412 2.06834 21.5514 2.06761 21.6498 2.1076C21.7481 2.14759 21.8266 2.22502 21.8679 2.32285L22.6149 4.14697C22.6352 4.19536 22.6457 4.2473 22.6457 4.29976C22.6456 4.35223 22.6352 4.40416 22.6149 4.45255C22.5946 4.50093 22.5649 4.5448 22.5275 4.58158C22.4901 4.61837 22.4458 4.64734 22.397 4.66682C22.3497 4.6911 22.2977 4.70491 22.2445 4.70728Z" fill="#0006B1" />
        </svg>
      </div>

      <div>
        <h1>Create an account</h1>

        <div className="register">
          <form onSubmit={handleSubmit(handleCredentialsRegister)}>
            <div className='input-field'>
              <label htmlFor="full-name">Input Full Name</label>
              <div className='input-register-field'>
                <input type="text" name="full-name" id="full-name" placeholder='Full Name' {...register('fullName', { required: true })} />
                {errors.fullName && <span>*Your name is required</span>}
              </div>
            </div>
            <div className='input-field'>
              <label htmlFor="email">Input Email</label>
              <input type="text" name="email" id="email" placeholder='Email' {...register('email', { required: true })} />
              {errors.email && <span>*Your email is required</span>}
            </div>
            <div className='input-field'>
              <label htmlFor="password">Password</label>
              <div className='input'>
                <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Password' {...register('password', { required: true })} />
                <Icon fontSize={22} onClick={() => setShowPassword(prev => !prev)} icon={showPassword ? 'ph:eye-slash-light' : 'ph:eye-light'} />
              </div>
              {errors.password && <span>*Your password is required</span>}
            </div>
            <div className='input-field'>
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className='input'>
                <input type={showConfirmPassword ? 'text' : 'password'} name="confirm-password" id="confirm-password" placeholder='Confirm Password' {...register('confirmPassword', { required: '*You need to confirm your password', validate: (value) => value === password || '*Passwords do not match' })} />
                <Icon fontSize={22} onClick={() => setShowConfirmPassword(prev => !prev)} icon={showConfirmPassword ? 'ph:eye-slash-light' : 'ph:eye-light'} />

              </div>
              {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            </div>

            <button disabled={isLoading || googleRegisterMutation.isPending || emailAndPasswordRegisterMutation.isPending}>
              {isLoading ? (
                <Icon className='loading-google' icon={'formkit:spinner'} fontSize={20} />
              ) : (
                'Create account'
              )}
            </button>
          </form>

          <div className='other-options'>
            <button onClick={handleGoogleRegister} type='button' className='google-button' disabled={isLoading || googleRegisterMutation.isPending || emailAndPasswordRegisterMutation.isPending}>
              {googleRegisterMutation.isPending ? (
                <span className='google-button-check'>
                  <Icon className='loading-google' icon={'formkit:spinner'} fontSize={22} />
                </span>
              ) : (
                <span className='google-button-check'>
                  <Icon icon={'ri:google-fill'} fontSize={22} />
                  <span>Continue with Google</span>
                </span>
              )}
            </button>
            <Link to={'/'} className='login-button'>
              Have an account?
              <span>Sign In</span>
            </Link>
          </div>

          <p className='terms'>By continuing to next step you agree to <span>privacy policy</span> and <span>terms of use</span></p>
        </div>
      </div>
    </main>
  )
}

export default Register
