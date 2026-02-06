import { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/UserThemeContext";

const Avatar = () => {
  const [avatarIsOpen, setAvatarIsOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();

  const menuRef = useRef(null)


  function toggleAvatar() {
    setAvatarIsOpen(!avatarIsOpen)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setAvatarIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [avatarIsOpen])


  return (<div className="relative">
    <button
      onClick={() => toggleAvatar()}
      className={`w-10 h-10 rounded-full overflow-clip hover:cursor-pointer border border-transparent  duration-200 ease-in transition-all ${!avatarIsOpen && 'hover:border-white'
        }`}>
      <img src="/image1.jpg" alt="Avatar" />
    </button>

    {/* Avatar Card */}
    {
      avatarIsOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 flex flex-col border border-gray-300 rounded-xl shadow-md w-64 animate-in dark:bg-light-green dark:border-dark-border">
          <div className="flex items-center gap-3 px-4 pt-3">
            <img src="/image1.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
            <span className="min-w-0">
              <h3 className="font-bold text-sm dark:text-white mb-1">Krypto Lily</h3>
              <p className="truncate text-sm text-gray-600 font-medium dark:text-gray-400">emily101@gmail.com</p>
            </span>
          </div>

          {/* Divider */}
          <div className="h-1 w-full border-b border-b-gray-200 dark:border-b-dark-border mt-4 mb-2"></div>

          <div className="px-4 flex justify-between ">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-gray-600 dark:stroke-gray-300 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
              <p className="dark:text-gray-400">Theme</p>
            </div>

            {/* Sun Button */}
            <div className="bg-teal flex items-center justify-center p-1 rounded-xl" >
              <button
                onClick={() => setIsDark(false)}
                className={`${isDark ? 'bg-transparent' : 'bg-white'
                  } pointer py-1 px-1 rounded-lg hover:bg-white animate`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              </button>

              {/* Moon Button */}
              <button
                onClick={() => setIsDark(true)}
                className={`${isDark ? 'bg-white' : 'bg-transparent'
                  } pointer py-1 px-1 rounded-lg hover:bg-white animate`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-1 w-full border-b border-b-gray-200 dark:border-b-dark-border mt-2"></div>

          <button className="w-full flex gap-2 px-4 py-3 hover:cursor-pointer hover:bg-gray-200 animate rounded-bl-lg rounded-br-lg dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-6 stroke-gray-500 dark:stroke-gray-300 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
            Logout
          </button>
        </div>
      )
    }
  </div>);
}

export default Avatar;