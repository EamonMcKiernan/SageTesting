/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl, Button, Dropdown, ColorPicker } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const [color, setColor] = useState();
	const [numButtons, setNumButtons] = useState(0);
	const [currentNum, setCurrentNum] = useState(1);

	const ChangeColour = (color) => {
		setColor(color);
		setAttributes( { background_colour: color } );
	};

	const AddNewButton = () => {
		let buttons = numButtons;
		setNumButtons(buttons + 1);
	};

	const ToggleComponentWidth = (e, num) => {
		setAttributes( { width: num });
		setCurrentNum(num);
	};

	return (
		<div { ...blockProps }>
			<Dropdown
				className="my-container-class-name"
				contentClassName="my-popover-content-classname"
				popoverProps={ { placement: 'bottom-start' } }
				renderToggle={ ( { isOpen, onToggle } ) => (
					<Button
						variant="primary"
						onClick={ onToggle }
						aria-expanded={ isOpen }
					>
						{isOpen ? 'Close dropdown' : 'Choose component width'}
					</Button>
				) }
				renderContent={ () => {
					return(
						<div class="flex flex-col">
							<Button
								variant={currentNum === 1 ? 'primary' : 'secondary'}
								onClick={(e) => ToggleComponentWidth(e, 1)}
							>
								Full
							</Button>
							<Button
								variant={currentNum === 2 ? 'primary' : 'secondary'}
								onClick={(e) => ToggleComponentWidth(e, 2)}
							>
								Wide
							</Button>
							<Button
								variant={currentNum === 3 ? 'primary' : 'secondary'}
								onClick={(e) => ToggleComponentWidth(e, 3)}
							>
								None
							</Button>
						</div>
					);
				} }
			/>
			<TextControl
				label={`Title:`}
				value={ attributes.title }
				onChange={ ( val ) => setAttributes( { title: val } ) }
			/>
			<TextControl
				label={`Blurb:`}
				value={ attributes.blurb }
				onChange={ ( val ) => setAttributes( { blurb: val } ) }
			/>
			<TextControl
				label={`Button One Url:`}
				value={ attributes.button_one_url }
				onChange={ ( val ) => setAttributes( { button_one_url: val } ) }
			/>
			<TextControl
				label={`Button One Text:`}
				value={ attributes.button_one_text }
				onChange={ ( val ) => setAttributes( { button_one_text: val } ) }
			/>
			<TextControl
				label={`Button Two Url:`}
				value={ attributes.button_two_url }
				onChange={ ( val ) => setAttributes( { button_two_url: val } ) }
			/>
			<TextControl
				label={`Button Two Text:`}
				value={ attributes.button_two_text }
				onChange={ ( val ) => setAttributes( { button_two_text: val } ) }
			/>
			{/* <Button onClick={AddNewButton} variant="primary">Add button</Button>
			{numButtons >= 1 ? (
				[...Array(numButtons)].map((index) => {
					return (
						<div key={index}>
							<TextControl
								label={`Url:`}
								value={ attributes.buttons[index].query.url }
							/>
							<TextControl
								label={`Button Text:`}
								value={ attributes.buttons[index].query.text }
							/>
						</div>
					);
				})
			) : null} */}
			{/* {
				attributes.buttons.length > 0 && (
					<ul>
						{
							attributes.buttons.map( (button, index) => {
								return (
									<li key={index}>
										<a href={button} >{button}</a> <button onClick={() => { const spliceReturn = attributes.buttons.splice( index, 1 ); setAttributes( { links: attributes.buttons.slice() } ); }} >Delete</button>
									</li>
								)
							})
						}
						<TextControl
							onChange={(newLink) => setAttributes({newLink})}
							value={newLink}
							onKeyUp={(event) => { if( 'Enter' === event.key ) { links.push(newLink); setAttributes({ links:attributes.buttons.slice(), newLink: '' } ) } }}
						/>
					</ul>
				)
			} */}
		</div>
	);
}
