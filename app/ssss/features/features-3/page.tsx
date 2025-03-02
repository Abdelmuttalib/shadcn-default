import { cn } from "@/lib/utils";
import { CloudUpload, Lock, Server } from "lucide-react";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudUpload,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Lock,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: Server,
  },
];

export default function Features3() {
  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="lg:pr-8 lg:pt-4">
            <div>
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-500">
                  Deploy faster
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg/8 text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
              <dl className="bg-muted/30 mt-10 grid rounded-lg border text-base/7 text-muted-foreground lg:max-w-none lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className={cn("relative flex flex-col p-8", {
                      "border-b lg:border-b-0 lg:border-r":
                        index + 1 !== features.length,
                    })}
                  >
                    <dt className="relative inline-flex flex-col gap-2 font-semibold text-foreground">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-indigo-600 dark:text-indigo-500"
                      />
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
