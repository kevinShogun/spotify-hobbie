export default function loading() {
    return (
        <div
            className='min-h-screen flex flex-col items-center justify-center gap-5'
        >
            <div
                className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'
            ></div>
            <p className='text-2xl font-bold text-gray-900'>Loading...</p>
        </div>
    )
}