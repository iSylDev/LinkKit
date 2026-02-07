import { useRef, useState } from "react";
import { useTheme } from "../contexts/UserThemeContext";
import { Palette, Sun, Moon, LogOut } from 'lucide-react'
import { useClickOutside } from "../helpers/useClickOutside";


const Avatar = () => {
  const [avatarIsOpen, setAvatarIsOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();

  const menuRef = useRef(null)
  useClickOutside(menuRef, () => setAvatarIsOpen(false))



  return (<div className="relative" ref={menuRef}>
    <button
      onClick={() => setAvatarIsOpen(!avatarIsOpen)}
      className={`w-11 h-11 rounded-full overflow-clip border border-transparent  duration-200 ease-in transition-all ${!avatarIsOpen && 'hover:border-white pointer'
        }`}>
      <img src="/image1.jpg" alt="Avatar" />
    </button>

    {/* Avatar Card */}
    {
      avatarIsOpen && (
        <div
          className={`absolute right-0 bg-white flex flex-col border border-gray-300 rounded-xl shadow-md w-64 animate-in dark:bg-light-green dark:border-dark-border`}>
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
              <Palette className="stroke-gray-600 dark:stroke-gray-300 w-5" />
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Theme</p>
            </div>

            <div className="bg-teal dark:bg-dark-border flex items-center justify-center p-1 rounded-xl" >
              {/* Sun Button */}
              <button
                onClick={() => setIsDark(false)}
                className={`${isDark ? 'bg-transparent' : 'bg-white'
                  } pointer py-1 px-2 rounded-lg hover:bg-white group dark:hover:bg-dark-green animate`}
              >
                <Sun className="w-5 stroke-gray-700 dark:stroke-white " />
              </button>

              {/* Moon Button */}
              <button
                onClick={() => setIsDark(true)}
                className={`${isDark ? 'bg-dark-green' : 'bg-transparent'
                  } pointer py-1 px-2 rounded-lg hover:bg-white animate dark:hover:bg-dark-green`}
              >
                <Moon className="w-5 stroke-gray-700 dark:stroke-white " />
              </button>
            </div>
          </div>
          <div className="h-1 w-full border-b border-b-gray-200 dark:border-b-dark-border mt-2"></div>

          <button className="w-full flex gap-2 px-4 py-3 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-green animate rounded-bl-xl rounded-br-xl text-gray-500 dark:text-gray-400  text-sm">
            <LogOut className="w-5 stroke-gray-700 dark:stroke-white " />
            Logout
          </button>
        </div>
      )
    }
  </div>);
}

export default Avatar;