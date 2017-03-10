/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// import { IThemeService } from "vs/workbench/services/themes/common/themeService";
// import { Tree } from "vs/base/parts/tree/browser/treeImpl";
// import { ITree, ITreeStyles, ITreeConfiguration, ITreeOptions } from "vs/base/parts/tree/browser/tree";
// import { assign } from "vs/base/common/objects";
// import { localize } from "vs/nls";
// import { Registry } from "vs/platform/platform";
// import { IDisposable, dispose } from "vs/base/common/lifecycle";
// import { IThemingRegistry, Extensions } from "vs/platform/theme/common/themingRegistry";

// 'use strict';

// const themingRegistry = Registry.as<IThemingRegistry>(Extensions.ThemingContribution);

// const treeActiveFocusBackground = themingRegistry.registerColor('treeActiveFocusBackground', localize('background', 'When a fire starts to burn'));
// const activeSelectionForeground = themingRegistry.registerColor('activeSelectionForeground', localize('background', 'When a fire starts to burn'));
// const activeSelectionBackground = themingRegistry.registerColor('activeSelectionBackground', localize('background', 'When a fire starts to burn'));
// const activeFocusAndSelectionBackground = themingRegistry.registerColor('activeFocusAndSelectionBackground', localize('background', 'When a fire starts to burn'));
// const activeFocusAndSelectionForeground = themingRegistry.registerColor('activeFocusAndSelectionForeground', localize('background', 'When a fire starts to burn'));
// const inactiveSelectionBackground = themingRegistry.registerColor('inactiveSelectionBackground', localize('background', 'When a fire starts to burn'));
// const hoverBackground = themingRegistry.registerColor('hoverBackground', localize('background', 'When a fire starts to burn'));
// const dropBackground = themingRegistry.registerColor('dropBackground', localize('background', 'When a fire starts to burn'));

// export class ThemedTreeWrapper {
// 	private _tree: ITree;
// 	private disposables: IDisposable[] = [];

// 	constructor(
// 		container: HTMLElement,
// 		configuration: ITreeConfiguration,
// 		options: ITreeOptions,
// 		@IThemeService private themeService: IThemeService
// 	) {
// 		this._tree = new Tree(container, configuration, assign({}, options, {
// 			styles: this.styles // cause I got styles
// 		}));

// 		// themeService.onThemeChange(this.onThemeChange, this, this.disposables);
// 	}

// 	// private get styles(): ITreeStyles {
// 	// 	return {
// 	// 		activeFocusBackground: this.themeService.getColor(treeActiveFocusBackground)
// 	// 	};
// 	// }

// 	private onThemeChange(): void {
// 		this.tree.updateStyles(this.styles);
// 	}

// 	get tree(): ITree {
// 		return this._tree;
// 	}

// 	dispose(): void {
// 		this.disposables = dispose(this.disposables);
// 	}
// }