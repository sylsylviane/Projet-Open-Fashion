import { Typography } from "./ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        theme="black"
        className="text-center"
      >
        Open Fashion Project
      </Typography>
      <Typography
        variant="sub-title-md"
        component="h2"
        theme="gray"
        className="text-center"
      >
        Open Fashion Project
      </Typography>
      <Typography
        variant="sub-title-sm"
        component="h3"
        theme="gray-md"
        className="text-center"
      >
        Open Fashion Project
      </Typography>
      <Typography
        variant="body-lg"
        component="p"
        theme="gray-light"
        className="text-center"
      >
        Open Fashion Project
      </Typography>
      <Typography
        variant="body-md"
        component="p"
        theme="primary"
        className="text-center"
      >
        Open Fashion Project
      </Typography>
      <Typography
        variant="body-sm"
        component="p"
        theme="secondary"
        className="text-center"
      >
        Open Fashion Project
      </Typography>
      <Typography
        variant="price"
        component="p"
        theme="secondary"
        className="text-center"
      >
        Open Fashion Project
      </Typography>
    </>
  );
}
