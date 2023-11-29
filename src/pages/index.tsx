import Avatar from "@/component/Avatar";
import { ButtonGroup } from "@/mock/index";
import Button from "@/component/Button";

export default function Home() {
  return (
    <main className={`flex  flex-col items-start p-24 `}>
      <figure className="flex items-center gap-4 my-3">
        <Avatar image="https://eduasis.io/eduasis-logo-white-text.svg" />
        <strong>Reading</strong>
      </figure>
      <div className="flex gap-3 items-center my-2">
        {ButtonGroup.map((item) => (
          <Button title={item.buttonTitle} key={item.index} />
        ))}
      </div>
      <p>
        The App Router works in a new directory named app. The app directory
        works alongside the pages directory to allow for incremental adoption.
        This allows you to opt some routes of your application into the new
        behavior while keeping other routes in the pages directory for previous
        behavior. If your application uses the pages directory, please also see
        the Pages Router documentation.
      </p>
    </main>
  );
}
