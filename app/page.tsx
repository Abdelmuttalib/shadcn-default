export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-6 gap-8 py-20 px-44">
        <div className="flex flex-col gap-8">
          <div className="bg-tw-background w-60 h-20 rounded">Background</div>
          <div className="bg-tw-background-inactive w-60 h-20 rounded">
            Background Inactive
          </div>
          <div className="bg-tw-background-subtle w-60 h-20 rounded">
            Background Subtle
          </div>
          <div className="bg-tw-background-soft w-60 h-20 rounded">
            Background Soft
          </div>
          <div className="bg-tw-background-strong w-60 h-20 rounded">
            Background Strong
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="text-2xl text-tw-foreground w-60 h-20 rounded">
            Foreground
          </div>
          <div className="text-2xl text-tw-foreground-inactive w-60 h-20 rounded">
            Foreground Inactive
          </div>
          <div className="text-2xl text-tw-foreground-subtle w-60 h-20 rounded">
            Foreground Subtle
          </div>
          <div className="text-2xl text-tw-foreground-soft w-60 h-20 rounded">
            Foreground Soft
          </div>
          <div className="text-2xl text-tw-foreground-strong w-60 h-20 rounded">
            Foreground Strong
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <input
            className="border border-tw-border w-60 h-20 rounded px-3 placeholder:text-tw-foreground-subtle outline-none focus:outline-none focus-visible:outline-none focus:border-tw-primary focus:ring focus:ring-tw-primary-subtle"
            type="text"
            placeholder="Text"
          />

          <div className="border border-tw-border w-60 h-20 rounded"></div>
          <div className="border border-tw-border-inactive w-60 h-20 rounded"></div>
          <div className="border border-tw-border-subtle w-60 h-20 rounded"></div>
          <div className="border border-tw-border-soft w-60 h-20 rounded"></div>
          <div className="border border-tw-border-strong w-60 h-20 rounded"></div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-tw-icon-bg w-60 h-20 rounded">Icon</div>
          <div className="bg-tw-icon-bg-inactive w-60 h-20 rounded">
            Icon Inactive
          </div>
          <div className="bg-tw-icon-bg-subtle w-60 h-20 rounded">
            Icon Subtle
          </div>
          <div className="bg-tw-icon-bg-soft w-60 h-20 rounded">Icon Soft</div>
          <div className="bg-tw-icon-bg-strong w-60 h-20 rounded">
            Icon Strong
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-tw-error w-60 h-20 rounded">Background</div>

          <div className="bg-tw-error-subtle w-60 h-20 rounded">
            Background Subtle
          </div>
          <div className="bg-tw-error-soft w-60 h-20 rounded">
            Background Soft
          </div>
          <div className="bg-tw-error-strong w-60 h-20 rounded">
            Background Strong
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-tw-warning w-60 h-20 rounded">Background</div>

          <div className="bg-tw-warning-subtle w-60 h-20 rounded">
            Background Subtle
          </div>
          <div className="bg-tw-warning-soft w-60 h-20 rounded">
            Background Soft
          </div>
          <div className="bg-tw-warning-strong w-60 h-20 rounded">
            Background Strong
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-tw-warning-subtle px-2 py-1 text-sm rounded-lg border border-tw-warning-soft text-tw-warning font-medium w-fit dark:bg-tw-warning-strong dark:border-transparent">
            Subtle
          </div>
          <div className="bg-tw-warning-soft px-2 py-1 text-sm rounded-lg border border-tw-warning-soft text-tw-warning font-medium w-fit dark:bg-tw-warning-strong dark:border-transparent">
            Soft
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-tw-info w-60 h-20 rounded">Background</div>

          <div className="bg-tw-info-subtle w-60 h-20 rounded">
            Background Subtle
          </div>
          <div className="bg-tw-info-soft w-60 h-20 rounded">
            Background Soft
          </div>
          <div className="bg-tw-info-strong w-60 h-20 rounded">
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
