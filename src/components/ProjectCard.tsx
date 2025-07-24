"use client";

import {
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Badge,
  Row,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  link: string;
  projectLink?: string;
  tag?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  link,
  projectLink,
  tag,
}) => {
  const handleCardClick = () => {
    if (projectLink) {
      window.open(projectLink, '_blank');
    }
  };

  return (
    <Column 
      fillWidth 
      gap="l" 
      padding="l" 
      border="neutral-medium" 
      radius="l"
      background="neutral-alpha-weak"
      style={{
        transition: "all 0.3s ease",
        cursor: projectLink ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        if (projectLink) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (projectLink) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }
      }}
      onClick={handleCardClick}
    >
      {/* Project Image */}
      {images.length > 0 && (
        <Column fillWidth gap="m">
          <Carousel
            sizes="(max-width: 960px) 100vw, 960px"
            items={images.map((image) => ({
              slide: image,
              alt: title,
            }))}
          />
        </Column>
      )}

      {/* Project Content */}
      <Flex
        mobileDirection="column"
        fillWidth
        gap="l"
      >
        {/* Header Section */}
        <Column flex={5} gap="m">
          {title && (
            <Heading as="h3" wrap="balance" variant="heading-strong-l">
              {title}
            </Heading>
          )}
          
          {/* Project Type Badge */}
          {tag && (
            <Flex gap="s" wrap>
              <Badge 
                background="brand-alpha-weak" 
                paddingX="8" 
                paddingY="2" 
                onBackground="neutral-strong" 
                textVariant="label-default-xs" 
                arrow={false}
              >
                <Row paddingY="1">{tag}</Row>
              </Badge>
            </Flex>
          )}
        </Column>

        {/* Description and Actions */}
        {(description?.trim() || content?.trim()) && (
          <Column flex={7} gap="l">
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
                {description}
              </Text>
            )}

            {/* Action Links */}
            <Flex gap="m" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
