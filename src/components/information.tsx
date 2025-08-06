"use client";

import { useState } from "react";
import { Info } from "lucide-react";

export function Information() {
	const [visible, setVisible] = useState(true);

	return (
		<div className="w-full">
			<div className="flex mb-2 items-center justify-center">
				<button
					onClick={() => setVisible((prev) => !prev)}
					className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent-foreground cursor-pointer"
				>
					{visible ? "Hide" : "Show"}
				</button>
			</div>
			{visible && (
				<div className="block border-l-4 border-blue-500 bg-white rounded-l rounded-md shadow p-6">
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<Info className="size-6 shrink-0 text-blue-500" />
							<div className="text-xl font-bold">Notice</div>
						</div>
						<div className="text-muted-foreground text-sm">
							This website is a demo project built purely for showcasing
							frontend development and UI/UX design skills. All products,
							images, prices, and store functionalities are entirely fictional
							and are not available for purchase. No real transactions can or
							will occur. The purpose of this mock store is to demonstrate
							skills in responsive layout, animations, design systems, and
							modern frontend technologies such as React, Tailwind CSS, and
							more.
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
