export function Footer() {
	return (
		<div className="bottom-0 w-full">
			<div className="mx-auto max-w-7xl px-6 md:px-0 flex items-center justify-center h-16">
				<div className="text-center text-sm text-muted-foreground">
					Built by{" "}
					<a
						href="https://github.com/almostJohn"
						rel="noreferrer"
						target="_blank"
						className="text-sm font-medium underline-offset-4 underline"
					>
						almostjohn
					</a>
					. The source code is available on{" "}
					<a
						href="https://github.com/almostJohn/demo-merch-site"
						rel="noreferrer"
						target="_blank"
						className="text-sm font-medium underline-offset-4 underline"
					>
						GitHub
					</a>
					.
				</div>
			</div>
		</div>
	);
}
