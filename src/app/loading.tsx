export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-neutral-200 dark:border-neutral-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        </div>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
          Loading Portfolio
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Preparing your experience...
        </p>
      </div>
    </div>
  )
}
