import './Loader.scss';

const Loader=()=> {
    return(
<div className="loader">
	<svg class="pl2" viewBox="0 0 128 128" width="128px" height="128px">
		<g fill="var(--primary)">
			<g class="pl2__rect-g">
				<rect class="pl2__rect" rx="8" ry="8" x="0" y="128" width="40" height="24" transform="rotate(180)" />
			</g>
			<g class="pl2__rect-g">
				<rect class="pl2__rect" rx="8" ry="8" x="44" y="128" width="40" height="24" transform="rotate(180)" />
			</g>
			<g class="pl2__rect-g">
				<rect class="pl2__rect" rx="8" ry="8" x="88" y="128" width="40" height="24" transform="rotate(180)" />
			</g>
		</g>
		<g fill="hsl(283,90%,50%)" mask="url(#pl-mask)">
			<g class="pl2__rect-g">
				<rect class="pl2__rect" rx="8" ry="8" x="0" y="128" width="40" height="24" transform="rotate(180)" />
			</g>
			<g class="pl2__rect-g">
				<rect class="pl2__rect" rx="8" ry="8" x="44" y="128" width="40" height="24" transform="rotate(180)" />
			</g>
			<g class="pl2__rect-g">
				<rect class="pl2__rect" rx="8" ry="8" x="88" y="128" width="40" height="24" transform="rotate(180)" />
			</g>
		</g>
	</svg>
	
</div>
    )
}
export default Loader;
