import { blogAuthors, blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";
import { services } from "@/data/services";

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAuthorBySlug(slug: string) {
  return blogAuthors.find((author) => author.slug === slug);
}
