import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

// https://dev.to/sanzhanov/testing-excel-data-with-cypress-1f1n


async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    )

    return config
}

export default defineConfig({
    e2e: {
        //baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
        specPattern: '**/*.feature',
        setupNodeEvents,

    },
})
