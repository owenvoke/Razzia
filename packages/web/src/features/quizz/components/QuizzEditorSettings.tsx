import { LEADERBOARD_MODES } from "@razzia/common/constants"
import type { LeaderboardMode } from "@razzia/common/types/game"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@razzia/web/components/Select"
import ConfigField from "@razzia/web/features/quizz/components/QuestionEditor/QuestionEditorConfig/ConfigField"
import ConfigSection from "@razzia/web/features/quizz/components/QuestionEditor/QuestionEditorConfig/ConfigSection"
import { useQuizzEditor } from "@razzia/web/features/quizz/contexts/quizz-editor-context"
import { Trophy } from "lucide-react"
import { useTranslation } from "react-i18next"

const QuizzEditorSettings = () => {
  const { settings, updateSettings } = useQuizzEditor()
  const { t } = useTranslation()

  const handleLeaderboardChange = (mode: LeaderboardMode) => {
    updateSettings({ leaderboard: mode })
  }

  const leaderboardOptions = Object.values(LEADERBOARD_MODES).map((mode) => ({
    value: mode,
    label: t(`quizz:settings.leaderboardMode.${mode}`),
  }))

  return (
    <aside className="bg-background z-10 m-3 flex max-h-[calc(100%-1.5rem)] w-68 shrink-0 flex-col gap-4 self-start overflow-y-auto rounded-xl p-4 shadow-sm">
      <h2 className="text-foreground text-base font-bold">
        {t("quizz:settings.title")}
      </h2>

      <ConfigSection title={t("quizz:settings.leaderboard")}>
        <ConfigField>
          <ConfigField.Label
            icon={<Trophy className="size-4" />}
            label={t("quizz:settings.leaderboardMode")}
          />
          <Select
            value={settings.leaderboard}
            onValueChange={handleLeaderboardChange}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {leaderboardOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <ConfigField.Description>
            {t(`quizz:settings.leaderboardModeHint.${settings.leaderboard}`)}
          </ConfigField.Description>
        </ConfigField>
      </ConfigSection>
    </aside>
  )
}

export default QuizzEditorSettings
