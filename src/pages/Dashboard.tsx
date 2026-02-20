import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/AppSidebar'
import ProfileAvatar from '@/components/ProfileAvatar';
import BookmarkCard from '@/components/BookmarkCard';
import { Searchbar } from '@/components/Searchbar';
import { SidebarProvider } from '../components/ui/sidebar.tsx'
import { NewBookmarkModal } from '@/components/NewBookMarkmodal.tsx'; 
import { useBookmarkStore } from '@/store/useBookmarkStore.ts';
import { useQuery } from '@tanstack/react-query';


const Dashboard = () => {
  const { fetchBookmarks } = useBookmarkStore();

  const { data: bookmarkData, error, isLoading } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: fetchBookmarks
  })
  


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
              {
                bookmarkData?.map((bookmark) => (
                  <BookmarkCard 
                    id={bookmark.id}
                    title={bookmark.title}
                    description={bookmark.description}
                    url={bookmark.url}
                    image_url={bookmark.image_url}
                    is_archived={bookmark.is_archived}
                    is_pinned={bookmark.is_pinned}
                    view_count={bookmark.view_count}
                    last_visited_at={bookmark.last_visited_at}
                    created_at={bookmark.created_at}
                    tags={bookmark.tags}
                    />
                ))
              }
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default Dashboard;