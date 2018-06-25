import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepRuleModule } from '../cep-rule/cep-rule.module';
import { FormsModule } from '@angular/forms';
import { CepEngineEditorCommonsModule } from 'app/cep-engine-editor-commons/cep-engine-editor-commons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatExpansionModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import { PerseoCoreEditorComponent } from './perseo-core-editor.component';
import { PerseoCoreRuleCreatorComponent } from './perseo-core-rule-creator/perseo-core-rule-creator.component';
import { PerseoCoreRuleListComponent } from './perseo-core-rule-list/perseo-core-rule-list.component';
import { PerseoCoreRuleEditorComponent } from './perseo-core-rule-editor/perseo-core-rule-editor.component';

@NgModule({
  declarations: [
    PerseoCoreEditorComponent,
    PerseoCoreRuleCreatorComponent,
    PerseoCoreRuleListComponent,
    PerseoCoreRuleEditorComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    CepEngineEditorCommonsModule,
    CepRuleModule
  ],
  exports: [
    PerseoCoreEditorComponent
  ]
})
export class PerseoCoreEditorModule { }
