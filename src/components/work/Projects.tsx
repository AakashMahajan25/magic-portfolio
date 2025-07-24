import { Column, Heading, RevealFx, Flex, Text } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { work } from "@/resources";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  const displayedProjects = range
    ? work.projects.slice(range[0] - 1, range[1] ?? work.projects.length)
    : work.projects;

  return (
    <Column fillWidth gap="xl" marginBottom="40">
      {/* Section Header */}
      <Flex fillWidth paddingX="l" paddingBottom="m">
        <Column gap="s">
          <Heading as="h2" variant="display-strong-s" wrap="balance">
            Featured Projects
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            A selection of projects that demonstrate my expertise in full-stack development, 
            design systems, and building scalable applications.
          </Text>
        </Column>
      </Flex>

      {/* Projects Grid */}
      <Column fillWidth gap="xl" paddingX="l">
        {displayedProjects.map((project, index) => (
          <RevealFx 
            key={project.slug} 
            translateY="8" 
            delay={index * 0.1}
            fillWidth
          >
            <ProjectCard
              priority={index < 2}
              href={`work/${project.slug}`}
              images={project.images}
              title={project.title}
              description={project.summary}
              content=""
              link={project.link || ""}
              projectLink={project.projectLink}
              tag={project.tag}
            />
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
}
