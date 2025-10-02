import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";

type Program = {
  title: string;
  date: string; // ISO
  time: string;
  location: string;
  summary: string;
  cover: string;
};

const programs: Program[] = [
  {
    title: "Web3 Builders Bootcamp (Cohort 4)",
    date: "2026-01-20",
    time: "10:00 AM WAT",
    location: "Lagos, Nigeria",
    summary:
      "An intensive hands-on bootcamp covering Solidity, dApps, security and career mentoring.",
    cover:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Smart Contracts 101 - Workshop",
    date: "2025-12-14",
    time: "2:00 PM WAT",
    location: "Online",
    summary:
      "A beginner-friendly workshop to write, test and deploy smart contracts.",
    cover:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Community Meetup: Careers in Web3 (Abuja)",
    date: "2025-06-18",
    time: "5:30 PM WAT",
    location: "Abuja, Nigeria",
    summary:
      "A past meetup highlighting real stories of breaking into blockchain careers across Africa.",
    cover:
      "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=1600&auto=format&fit=crop",
  },
];

function splitPrograms(list: Program[]) {
  const now = new Date();
  const upcoming: Program[] = [];
  const past: Program[] = [];
  for (const p of list) {
    (new Date(p.date) >= new Date(now.toDateString()) ? upcoming : past).push(
      p,
    );
  }
  // sort upcoming ascending, past descending
  upcoming.sort((a, b) => +new Date(a.date) - +new Date(b.date));
  past.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return { upcoming, past };
}

export default function Programs() {
  const { upcoming, past } = splitPrograms(programs);

  return (
    <>
      <SEO
        title="Our Programs | HFutureHub"
        description="Browse past and upcoming programs, bootcamps and workshops."
      />
      <main className="py-16 lg:py-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <Badge className="mb-4 bg-brand-green-light text-brand-green border-brand-green/20">
              Programs
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our Programs
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clean and simple overview of our bootcamps, workshops and
              community meetups.
            </p>
          </header>

          {upcoming.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Upcoming</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((p) => (
                  <Card
                    key={p.title}
                    className="overflow-hidden border-0 shadow-lg"
                  >
                    <div className="relative h-44">
                      <img
                        src={p.cover}
                        alt={p.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {p.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />{" "}
                          {new Date(p.date).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          · {p.time}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {p.location}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold mb-4">Past Programs</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((p) => (
                <Card
                  key={p.title}
                  className="overflow-hidden border-0 shadow-md"
                >
                  <div className="relative h-40">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />{" "}
                        {new Date(p.date).toLocaleDateString()}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {p.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{p.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
