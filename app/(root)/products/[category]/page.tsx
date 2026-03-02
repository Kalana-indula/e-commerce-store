import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const items = [
    {
        value: "notifications",
        trigger: "Notification",
        content:
            "Content",
    },
    {
        value: "privacy",
        trigger: "Privacy",
        content:
            "Content",
    },
    {
        value: "billing",
        trigger: "Billing",
        content:
            "Content",
    },
]

const Page = () => {
    return (
        <div className="flex min-h-[962px] mx-auto max-w-8xl my-2 px-4 sm:px-6 lg:px-10">
            {/* left panel */}
            <div className="w-[180px] bg-dark-700 p-4 text-light-100">
                <div>
                    <Accordion
                        type="multiple"
                        className="max-w-lg"
                        defaultValue={["notifications"]}
                    >
                        {items.map((item) => (
                            <AccordionItem key={item.value} value={item.value}>
                                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                                <AccordionContent>{item.content}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>

            {/* content area */}
            <div className="flex-1 p-4">
                {/* content goes here */}
                <div>
                    This is test
                </div>
                <div>
                    This is test
                </div>
                <div>
                    This is test
                </div>
            </div>
        </div>
    );
};

export default Page;