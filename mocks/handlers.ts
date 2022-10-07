// @ts-nocheck
import { rest } from "msw";

export const handlers = [
	rest.get(
		`/data`,
		(req, res, ctx) => {
			if (res.status === 200) {
                return res(
                    ctx.status(200),
                    ctx.json({
                        message: 'data'
                    })
                );
			} else {
				return res(
					ctx.status(404),
					ctx.json({
						errorMessage: "error",
					})
				);
			}
		}
	),
	rest.get(
		`/data7`,
		(req, res, ctx) => {
			if (res.status === 200) {
                return res(
                    ctx.status(404),
                    ctx.json({
                        message: 'data7'
                    })
                );
			} else {
				return res(
					ctx.status(404),
					ctx.json({
						errorMessage: "error",
					})
				);
			}
		}
	),
];
