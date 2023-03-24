/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, Button, Dropdown, ColorPicker } from '@wordpress/components';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	console.log(blockProps);
	return(
		<div class={`${attributes.width === 3 ? 'w-full' : attributes.width === 2 ? 'w-full max-w-7xl mx-auto' : 'w-auto'}`}>
			<div { ...blockProps }>
				<div class={`flex flex-col justify-center items-center text-center p-8 w-full`}>
					<h1 class="!text-white text-xl lg:text-2xl">{ attributes.title }</h1>
					<span class="!text-white text-lg lg:text-xl">{ attributes.blurb }</span>
					<div class="buttons-wrapper flex flex-row justify-center items-center gap-4 mt-6">
						{(attributes.button_one_url && attributes.button_one_text) ? (
							<a href={attributes.button_one_url} class="!text-white bg-gray-600 px-8 py-3">
								{attributes.button_one_text}
							</a>
						) : null}
						{(attributes.button_two_url && attributes.button_two_text) ? (
							<a href={attributes.button_two_url} class="!text-white bg-gray-600 px-8 py-3">
								{attributes.button_two_text}
							</a>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
