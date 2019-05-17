const React = require("react");

const LoaderComponent = () => (
	<table className="doc-loader">
		<tbody>
			<tr>
				<td>
					<img
						src="/images/ajax-document-loader.gif"
						alt="Loading..."
					/>
				</td>
			</tr>
		</tbody>
	</table>
);

module.exports = LoaderComponent;
