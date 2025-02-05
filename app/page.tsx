export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-6 gap-8 px-44 py-20">
        <div className="flex flex-col gap-8">
          <div className="bg-tw-background h-20 w-60 rounded">Background</div>
          <div className="bg-tw-background-inactive h-20 w-60 rounded">
            Background Inactive
          </div>
          <div className="bg-tw-background-subtle h-20 w-60 rounded">
            Background Subtle
          </div>
          <div className="bg-tw-background-soft h-20 w-60 rounded">
            Background Soft
          </div>
          <div className="bg-tw-background-strong h-20 w-60 rounded">
            Background Strong
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="text-tw-foreground h-20 w-60 rounded text-2xl">
            Foreground
          </div>
          <div className="text-tw-foreground-inactive h-20 w-60 rounded text-2xl">
            Foreground Inactive
          </div>
          <div className="text-tw-foreground-subtle h-20 w-60 rounded text-2xl">
            Foreground Subtle
          </div>
          <div className="text-tw-foreground-soft h-20 w-60 rounded text-2xl">
            Foreground Soft
          </div>
          <div className="text-tw-foreground-strong h-20 w-60 rounded text-2xl">
            Foreground Strong
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <input
            className="border-tw-border placeholder:text-tw-foreground-subtle focus:border-tw-primary focus:ring-tw-primary-subtle h-20 w-60 rounded border px-3 outline-none focus:outline-none focus:ring focus-visible:outline-none"
            type="text"
            placeholder="Text"
          />

          <div className="border-tw-border h-20 w-60 rounded border"></div>
          <div className="border-tw-border-inactive h-20 w-60 rounded border"></div>
          <div className="border-tw-border-subtle h-20 w-60 rounded border"></div>
          <div className="border-tw-border-soft h-20 w-60 rounded border"></div>
          <div className="border-tw-border-strong h-20 w-60 rounded border"></div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-tw-icon-bg h-20 w-60 rounded">Icon</div>
          <div className="bg-tw-icon-bg-inactive h-20 w-60 rounded">
            Icon Inactive
          </div>
          <div className="bg-tw-icon-bg-subtle h-20 w-60 rounded">
            Icon Subtle
          </div>
          <div className="bg-tw-icon-bg-soft h-20 w-60 rounded">Icon Soft</div>
          <div className="bg-tw-icon-bg-strong h-20 w-60 rounded">
            Icon Strong
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-tw-error h-20 w-60 rounded">Background</div>

          <div className="bg-tw-error-subtle h-20 w-60 rounded">
            Background Subtle
          </div>
          <div className="bg-tw-error-soft h-20 w-60 rounded">
            Background Soft
          </div>
          <div className="bg-tw-error-strong h-20 w-60 rounded">
            Background Strong
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-tw-warning h-20 w-60 rounded">Background</div>

          <div className="bg-tw-warning-subtle h-20 w-60 rounded">
            Background Subtle
          </div>
          <div className="bg-tw-warning-soft h-20 w-60 rounded">
            Background Soft
          </div>
          <div className="bg-tw-warning-strong h-20 w-60 rounded">
            Background Strong
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-tw-warning-subtle border-tw-warning-soft text-tw-warning dark:bg-tw-warning-strong w-fit rounded-lg border px-2 py-1 text-sm font-medium dark:border-transparent">
            Subtle
          </div>
          <div className="bg-tw-warning-soft border-tw-warning-soft text-tw-warning dark:bg-tw-warning-strong w-fit rounded-lg border px-2 py-1 text-sm font-medium dark:border-transparent">
            Soft
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-tw-info h-20 w-60 rounded">Background</div>

          <div className="bg-tw-info-subtle h-20 w-60 rounded">
            Background Subtle
          </div>
          <div className="bg-tw-info-soft h-20 w-60 rounded">
            Background Soft
          </div>
          <div className="bg-tw-info-strong h-20 w-60 rounded">
            Background Strong
          </div>
        </div>
      </main>
    </div>
  );
}

// colors: {
//   tw: {
//     background: "var(--background)",
//     "background-inactive": "var(--background-inactive)",
//     "background-subtle": "var(--background-subtle)",
//     "background-soft": "var(--background-soft)",
//     "background-strong": "var(--background-strong)",
//     border: "var(--border)",
//     "border-inactive": "var(--border-inactive)",
//     "border-subtle": "var(--border-subtle)",
//     "border-soft": "var(--border-soft)",
//     "border-strong": "var(--border-strong)",
//     foreground: "var(--foreground)",
//     "foreground-inactive": "var(--foreground-inactive)",
//     "foreground-subtle": "var(--foreground-subtle)",
//     "foreground-soft": "var(--foreground-soft)",
//     "icon-bg": "var(--icon-bg)",
//     "icon-bg-inactive": "var(--icon-bg-inactive)",
//     "icon-bg-subtle": "var(--icon-bg-subtle)",
//     "icon-bg-soft": "var(--icon-bg-soft)",
//     "icon-bg-strong": "var(--icon-bg-strong)",
//     error: "var(--error)",
//     "error-subtle": "var(--error-subtle)",
//     "error-soft": "var(--error-soft)",
//     "error-strong": "var(--error-strong)",
//     success: "var(--success)",
//     "success-subtle": "var(--success-subtle)",
//     "success-soft": "var(--success-soft)",
//     "success-strong": "var(--success-strong)",
//     warning: "var(--warning)",
//     "warning-subtle": "var(--warning-subtle)",
//     "warning-soft": "var(--warning-soft)",
//     "warning-strong": "var(--warning-strong)",
//     info: "var(--info)",
//     "info-subtle": "var(--info-subtle)",
//     "info-soft": "var(--info-soft)",
//     "info-strong": "var(--info-strong)",
//     primary: "var(--primary)",
//     "primary-inactive": "var(--primary-inactive)",
//     "primary-subtle": "var(--primary-subtle)",
//     "primary-dark": "var(--primary-dark)",
//     "primary-darker": "var(--primary-darker)",
//   },
// }
