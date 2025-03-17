export function TheVideoModal({
  closeModal,
}: {
  closeModal: (event: React.MouseEvent<HTMLElement>) => void
}) {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center">
      <div
        className="absolute z-15 h-full w-full bg-black/30 backdrop-blur-[15px]"
        onClick={closeModal}
      ></div>
      <div className="absolute z-20 -m-2 grid h-[35%] w-[90%] grid-cols-1 rounded-4xl ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 sm:h-[35%] sm:w-[75%] lg:h-[65%] lg:w-[55%]">
        <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
          <div className="flex items-center justify-center rounded-3xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] ring-1 shadow-2xl ring-black/5 sm:bg-linear-145">
            <div className="relative h-[92%] w-[95%]">
              <div className="absolute top-0 left-0 h-full w-full">
                <video
                  src="/plays/arbre-à-came.mp4"
                  className="h-full w-full rounded-2xl object-cover"
                  controls
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
