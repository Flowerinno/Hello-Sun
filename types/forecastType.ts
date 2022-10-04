export interface SidebarProps {
	location: {
		name: string;
	};
	current: {
		temp_c: number;
		last_updated: string;
		wind_mph: number;
		condition: {
			text: string;
			icon: string;
		};
	};
}