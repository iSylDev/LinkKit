import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/AppSidebar'
import ProfileAvatar from '@/components/ProfileAvatar';
import BookmarkCard from '@/components/BookmarkCard';
import { Searchbar } from '@/components/Searchbar';
import { SidebarProvider } from '../components/ui/sidebar.tsx'
import { NewBookmarkModal } from '@/components/NewBookMarkModal.tsx';


const Dashboard = () => {
  


  return (
    <SidebarProvider>
      <div className='flex min-h-screen w-full'>
        <AppSidebar />
        <SidebarInset>
          <main className='flex flex-col gap-12 bg-background'>
            <header className='bg-card flex items-center justify-between px-6 py-5 lg:px-9'>
              <div className='flex items-center gap-3'>
                <SidebarTrigger className='md:hidden' />
                <Searchbar />
              </div>

              <div className='flex items-center gap-3 lg:gap-4'>
                <NewBookmarkModal />
                <ProfileAvatar />
              </div>
            </header>

            <div className='px-6 lg:px-9'>
              <BookmarkCard />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default Dashboard;