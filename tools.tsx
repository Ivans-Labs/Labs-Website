/** @jsx femtojsx.h */

import { femtojsx } from "./html.tsx";
import { Page } from "./components.tsx";

export function ToolsPage() {
  return (
    <Page title="Tools | Ivan's Minimal Website">
      <ToolSection />
    </Page>
  );
}

export function ToolSection() {
    return (
        <section class="p-5">
            <h2 class="text-center" style="color: #FFF;">Available Tools</h2>
            <div class="mt-5" style="background-color: #545B68; padding: 10px; border-radius: 5px;">
                <Tool name="Tool 1" description="This is a description for Tool 1." />
                <Tool name="Tool 2" description="This is a description for Tool 2." />
                <Tool name="Tool 3" description="This is a description for Tool 3." />
            </div>
        </section>
    );
}

type ToolProps = {
  name: string;
  description: string;
};

export function Tool(props: ToolProps) {
    return (
        <div class="box f-column mt-3 p-3" style="border-radius: 5px; background-color: #3D4653; color: #FFF;">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}