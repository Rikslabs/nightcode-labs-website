export type JarvisGuideTopic = "welcome" | "headquarters-summary" | "engineering" | "products" | "mission-control" | "research" | "command-center" | "featured-product" | "featured-mission" | "primary-research" | "engineering-health" | "unknown";
export type JarvisGuideMessage = Readonly<{ id: string; topic: JarvisGuideTopic; title: string; message: string; status?: string; department?: string; actionLabel?: string; targetSectionId?: string; generatedAt: string }>;
export type JarvisSectionGuide = Readonly<{ sectionId: string; topic: JarvisGuideTopic; department: string }>;
