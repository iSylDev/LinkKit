import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/AppSidebar'
import ProfileAvatar from '@/components/ProfileAvatar';
import BookmarkCard from '@/components/BookmarkCard';
import { Searchbar } from '@/components/Searchbar';


const Dashboard = () => {
  return (
    <div className='flex min-h-screen w-full'>
      <AppSidebar />
      <SidebarInset>


        <main className='flex flex-col gap-12 bg-background'>
          <header className='bg-card flex items-center px-6 py-3'>
          <div className='flex items-center gap-3'>
            <SidebarTrigger className='lg:hidden' />
            <Searchbar />
          </div>


          </header>
          <h3>Dashboard context</h3>
          <ProfileAvatar />
          <BookmarkCard />
        </main>
      </SidebarInset>
    </div>
  );
}

export default Dashboard;