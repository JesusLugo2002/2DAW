from shared.serializers import BaseSerializer


class TeamSerializer(BaseSerializer):
    def serialize_instance(self, instance) -> dict:
        return {
            'id': instance.pk,
            'name': instance.name,
            'slug': instance.slug,
            'league': instance.get_league_display(),
            'shield': self.build_url(instance.shield.url),
        }
